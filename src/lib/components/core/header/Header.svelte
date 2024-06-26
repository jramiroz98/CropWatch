<script lang="ts">
	import {
		AppBar,
		Avatar,
		Button,
		Icon,
		Menu,
		MenuItem,
		ResponsiveMenu,
		ThemeSelect,
		ThemeSwitch,
		Toggle,
		Tooltip
	} from 'svelte-ux';
	import {
		mdiAccount,
		mdiBell,
		mdiBellAlert,
		mdiCheckCircle,
		mdiCog,
		mdiDotsVertical,
		mdiLock
	} from '@mdi/js';
	import { goto } from '$app/navigation';
	import { authState } from '$lib/stores/auth.store';
	import { alertState } from '$lib/stores/alert.store';
	import cropWatchSVG from '$lib/images/cropwatch.svg';
	import { _ } from 'svelte-i18n';
	import LanguageSelect from '$lib/components/LanguageSelect.svelte';

	export let username;

	const logout = async () => {
		$authState?.signOut().then((error) => {
			goto('/auth/login');
		});
	};
</script>

<AppBar class="bg-emerald-700 text-white elevation-10">
	<div slot="title" class="flex">
		<img src={cropWatchSVG} class="mr-3 h-6 sm:h-9" alt="CropWatch Company Icon" />
		<span class="hidden md:inline-block translate-y-1/4">{$_('header_title')}</span>
		<!-- <span class="translate-y-1/4 hidden md:inline-block">Farming</span> -->
	</div>

	<div slot="actions" class="flex gap-1 md:gap-3">
		<Tooltip title={$_('header.alerts')} placement="left" offset={2}>
			<Toggle let:on={open} let:toggle>
				<Button
					on:click={toggle}
					icon={{
						data: $alertState.length === 0 ? mdiBell : mdiBellAlert,
						size: '1.5rem',
						style: $alertState.length === 0 ? 'color:white' : 'color:#ecff06'
					}}
				>
					<Menu {open} on:close={toggle}>
						{#if $alertState.length === 0}
							<MenuItem>
								<Icon data={mdiCheckCircle} style="color:green;" />
								{$_('header_no_alerts')}
							</MenuItem>
						{/if}
					</Menu>
				</Button>
			</Toggle>
		</Tooltip>

		<Tooltip title={$_('header.user_management')} placement="left" offset={2}>
			<Toggle let:on={open} let:toggle let:toggleOff>
				<Button on:click={toggle}>
					<Avatar class="bg-slate-100 text-emerald-700 font-bold">
						<Icon data={mdiAccount} size="35" />
					</Avatar>
					<ResponsiveMenu {open} on:close={toggleOff}>
						<MenuItem
							icon={mdiCog}
							classes={{ root: 'p-4' }}
							on:click={() => {
								toggleOff;
								goto('/app/settings');
							}}>{$_('header.settings')}</MenuItem
						>
						<MenuItem
							icon={mdiLock}
							classes={{ root: 'p-4' }}
							on:click={toggleOff}
							on:click={() => logout()}>{$_('header.logout')}</MenuItem
						>
					</ResponsiveMenu>
					<div class="grid grid-col grid-rows-2 mx-3">
						<small>
							<small>{username}</small>
						</small>
						<small>{$_('header.admin')}</small>
					</div>
					<Icon data={mdiDotsVertical} />
				</Button>
			</Toggle>
		</Tooltip>

		<div class="border-r border-primary-content/20 pr-2 grid grid-cols-2 items-center">
			<LanguageSelect />

			<ThemeSelect keyboardShortcuts />
		</div>
	</div>
</AppBar>
