<template>
    <section class="min-h-screen bg-gray-950 text-white py-10 px-4 md:px-12">
        <h1 class="mb-10 w-full bg-gradient-to-b bg-clip-text text-center text-4xl font-bold text-white md:text-4xl">
            🎯 Upcoming CTFs
        </h1>
        <div v-if="loading" class="text-center text-gray-400 animate-pulse">Loading...</div>
        <!-- <div v-else-if="error" class="text-center text-red-500">Error loading data!</div> -->

        <div v-else class="overflow-x-auto shadow-lg rounded-xl bg-gray-900 ring-1 ring-gray-800">
            <table class="min-w-[1200px] w-full text-sm md:text-base table-auto">
                <thead class="bg-gray-800 text-gray-300 uppercase tracking-wider text-xs">
                    <tr>
                        <th class="py-4 px-4 text-left">Event</th>
                        <th class="py-4 px-4 text-left">Date</th>
                        <th class="py-4 px-4 text-left">Format</th>
                        <th class="py-4 px-4 text-left">Organizer</th>
                        <th class="py-4 px-4 text-left">Participants</th>
                        <th class="py-4 px-4 text-left">Weight</th>
                        <th class="py-4 px-4 text-left">Prizes</th>
                    </tr>
                </thead>
                <!-- <tbody>
                    <tr v-for="ctf in ctfs" :key="ctf.id"
                        class="border-t border-gray-800 hover:bg-gray-800 transition-all">
                        <td class="py-4 px-4 font-medium text-blue-400">
                            <a :href="ctf.url" target="_blank" class="hover:underline">
                                {{ ctf.title }}
                            </a>
                        </td>
                        <td class="py-4 px-4">
                            <span class="block">{{ formatDate(ctf.start) }}</span>
                            <span class="block text-gray-500">→ {{ formatDate(ctf.finish) }}</span>
                        </td>
                        <td class="py-4 px-4 text-green-400">{{ ctf.format }}</td>
                        <td class="py-4 px-4 text-gray-200">
                            {{ ctf.organizers?.[0]?.name || 'Unknown' }}
                        </td>
                        <td class="py-4 px-4">{{ ctf.participants }}</td>
                        <td class="py-4 px-4 font-semibold text-yellow-300">{{ ctf.weight }}</td>
                        <td class="py-4 px-4 text-gray-400 whitespace-pre-line text-xs md:text-sm">
                            {{ ctf.prizes || '—' }}
                        </td>
                    </tr>
                </tbody> -->
                <tbody>
                    <tr v-for="ctf in ctfs" :key="ctf.id"
                        class="border-t border-gray-800 hover:bg-gray-800 transition-all">
                        <td class="py-4 px-4 font-medium text-blue-400 whitespace-nowrap min-w-[200px]">
                            <a :href="ctf.url" target="_blank" class="hover:underline">
                                {{ ctf.title }}
                            </a>
                        </td>
                        <td class="py-4 px-4 whitespace-nowrap min-w-[160px]">
                            <span class="block">{{ formatDate(ctf.start) }}</span>
                            <span class="block text-gray-500">→ {{ formatDate(ctf.finish) }}</span>
                        </td>
                        <td class="py-4 px-4 text-green-400 whitespace-nowrap min-w-[100px]">
                            {{ ctf.format }}
                        </td>
                        <td class="py-4 px-4 text-gray-200 whitespace-nowrap min-w-[150px]">
                            {{ ctf.organizers?.[0]?.name || 'Unknown' }}
                        </td>
                        <td class="py-4 px-4 whitespace-nowrap min-w-[100px]">
                            {{ ctf.participants }}
                        </td>
                        <td class="py-4 px-4 font-semibold text-yellow-300 whitespace-nowrap min-w-[80px]">
                            {{ ctf.weight }}
                        </td>
                        <td class="py-4 px-4 text-gray-400 text-xs md:text-sm whitespace-pre-line min-w-[300px]">
                            {{ ctf.prizes || '—' }}
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const ctfs = ref([])
const loading = ref(true)
const error = ref(false)




onMounted(async () => {
    try {
        const res = await fetch('/api/ctfs')
        if (!res.ok) throw new Error('Failed to fetch')
        ctfs.value = await res.json()
    } catch (err) {
        error.value = true
    } finally {
        loading.value = false
    }
})
if (ctfs.value.length !== 0) {
    console.log(ctfs.value);

}

function formatDate(dateStr: string) {
    const date = new Date(dateStr)
    return date.toUTCString().slice(5, 22)
}
</script>
