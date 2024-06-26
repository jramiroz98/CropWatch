<script lang="ts">
	import {
		mdiAlert,
		mdiBattery,
		mdiDotsVertical,
		mdiListStatus,
		mdiRadioTower,
		mdiViewDashboard
	} from '@mdi/js';
	import {
		Avatar,
		Button,
		Card,
		Header,
		Icon,
		Menu,
		MenuItem,
		ProgressCircle,
		Toggle
	} from 'svelte-ux';
	import backgroundImg from '$lib/images/breadcrumb-bg.jpg';
	import CwTable from '$lib/components/table/CWTable.svelte';
	import { openFeedback } from '$lib/stores/feedback.store.js';
	import { onMount } from 'svelte';
	import moment from 'moment';
	import { supabase } from '$lib/supabaseClient';
	import { _ } from 'svelte-i18n';

	export let data;

	let sensors = null;
	let gridData = null;

	async function getDataForSensor(data_table: string, dev_eui: string) {
		try {
			const { data, error } = await supabase
				.from(data_table)
				.select('*')
				.eq('dev_eui', dev_eui)
				.order('created_at', { ascending: false })
				.limit(1)
				.maybeSingle();
			if (!data) {
				console.error('getDataForSensor', error);
				return [];
			} else {
				return data;
			}
		} catch (error) {
			return [];
		}
	}

	onMount(async () => {
		const deviceTableResponse = await fetch('/api/device-table', { method: 'GET' });
		sensors = await deviceTableResponse.json();

		for (let i = 0; i < sensors.length; i++) {
			const data_table = sensors[i].cw_devices.cw_device_type.data_table;
			if (data_table) {
				const dev_data = await getDataForSensor(data_table, sensors[i].cw_devices.dev_eui);
				sensors[i].data = Object.assign({}, sensors[i], dev_data);
			}
		}

		const transformedData = sensors.map((sensor) => {
			// Extracting the sensor's name
			const name = sensor.cw_devices.name;

			// Extracting the created_at timestamp from sensor data if available, otherwise from the device type
			const lastSeen = sensor.data?.created_at ?? sensor.cw_devices.cw_device_type.created_at;

			const devEui = sensor.cw_devices.dev_eui;

			const Location = sensor.cw_devices?.cw_device_locations;

			const model = sensor.cw_devices.cw_device_type.id;

			// Extract additional sensor data, e.g., temperature, and format it
			const primaryData = sensor.data[sensor.cw_devices.cw_device_type.primary_data]
				? `${sensor.data[sensor.cw_devices.cw_device_type.primary_data]}${sensor.cw_devices.cw_device_type.primary_data_notation}`
				: 'N/A';

			// Here, you can add more sensor data as needed
			// const otherSensorData = ...

			let active = '⚪';
			if (sensor.cw_devices.upload_interval > 0) {
				if (
					moment(lastSeen).add(sensor.cw_devices.upload_interval, 'minutes').isAfter(moment().utc())
				) {
					active = '🟢';
				} else {
					active = '🔴';
				}
			}

			const url = sensor.cw_devices.cw_device_type.device_app;

			const locationName = Location?.cw_locations?.name ?? 'N/A';

			return { active, name, locationName, devEui, Location, lastSeen, model, primaryData, url };
		});
		gridData = transformedData;
	});
</script>

<h1
	class="mb-2 flex items-center text-2xl font-bold border-b w-full text-white relative"
	style="background-image:url({backgroundImg}); width:100%; height: 100px;"
>
	<div class="flex items-center space-x-2 ml-2">
		<Icon data={mdiViewDashboard} />
		<span>{$_('dashboard.title')}</span>
	</div>
</h1>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
	<Card class="flex flex-row md:flex md:flex-row lg:flex-col">
		<Header title={$_('dashboard.notifications')} subheading="" slot="header">
			<div slot="avatar">
				<Avatar class="bg-primary text-primary-content font-bold">
					<Icon data={mdiAlert} />
				</Avatar>
			</div>
		</Header>
		<div slot="contents" class="flex h-full">
			<h1 class="text-lg md:text-2xl lg:pb-3 lg:text-2xl text-gray-700 w-full my-auto text-right lg:text-left">🟢 0</h1>
		</div>
	</Card>

	<Card class="flex flex-row md:flex md:flex-row lg:flex-col">
		<Header title={$_('dashboard.devices')} subheading="" slot="header">
			<div slot="avatar">
				<Avatar class="bg-primary text-primary-content font-bold">
					<Icon data={mdiListStatus} />
				</Avatar>
			</div>
		</Header>
		<div slot="contents" class="flex h-full">
			<h1 class="text-lg md:text-2xl lg:pb-3 lg:text-2xl text-gray-700 w-full my-auto text-right lg:text-left">
				{#if gridData}
					🟢 {gridData.filter((sensor) => sensor.active === '🟢').length} / {gridData.length}
				{/if}
			</h1>
		</div>
	</Card>

	<Card class="flex flex-row md:flex md:flex-row lg:flex-col">
		<Header title="{$_('dashboard.gateways')}" subheading="" slot="header">
			<div slot="avatar">
				<Avatar class="bg-primary text-primary-content font-bold">
					<Icon data={mdiRadioTower} />
				</Avatar>
			</div>
		</Header>

		<div slot="contents" class="flex h-full">
			<h1 class="text-lg md:text-2xl lg:pb-3 lg:text-2xl text-gray-700 w-full my-auto text-right lg:text-left">
				🟢 3 /3
			</h1>
		</div>
	</Card>
	<Card class="flex flex-row md:flex md:flex-row lg:flex-col">
		<Header title="{$_('dashboard.low_battery')}" subheading="" slot="header">
			<div slot="avatar">
				<Avatar class="bg-primary text-primary-content font-bold">
					<Icon data={mdiBattery} />
				</Avatar>
			</div>
		</Header>
		<div slot="contents" class="flex h-full">
			<h1 class="text-lg md:text-2xl lg:pb-3 lg:text-2xl text-gray-700 w-full my-auto text-right lg:text-left">
				{#if gridData}
					🟢 0 / {gridData.length}
				{/if}
			</h1>
		</div>
	</Card>
</div>

<Card class="mt-2">
	{#if gridData}
		<CwTable data={gridData} />
	{:else}
		<div class="mx-auto p-5">
			<ProgressCircle />
			<p>Loading...</p>
		</div>
	{/if}
</Card>

<style global>
	@import 'https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';
</style>
