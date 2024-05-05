import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, locals: { supabase, safeGetSession } }) {
    let session = await safeGetSession();
    if (!session || !session?.user) throw redirect(304, 'auth/login');

    const sensorDataRequest = await fetch(`/api/v1/devices/${params.dev_eui}/data?page=0&count=100`);
    const sensorData = await sensorDataRequest.json();

    const sensorTypeRequest = await fetch(`/api/v1/devices/${params.dev_eui}/type`);
    const sensorType = await sensorTypeRequest.json();

    return {
        data: sensorData,
        sensorType: sensorType,
    };
}