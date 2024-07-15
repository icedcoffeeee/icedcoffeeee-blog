<script lang="ts">
	import library2 from '$lib/assets/library-2.jpg';
	import lab from '$lib/assets/lab.jpg';
	import whiteboard from '$lib/assets/whiteboard.jpg';
	import experiment from '$lib/assets/experiment.jpg';
	import traffic from '$lib/assets/traffic.jpg';
	import tutor from '$lib/assets/tutor.jpg';
</script>

<svelte:head>
	<title>Hazim Saharuddin | About</title>
</svelte:head>

<h1 class="font-['Silkscreen',_sans-serif] text-xl md:text-3xl mb-4 md:mb-8">About Me</h1>
<div class="md:mx-10 flex flex-col gap-4">
	<div class="grid grid-cols-2 gap-4 place-items-center md:grid-cols-4">
		<img src={library2} alt="library-2" class="aspect-[9/16]" />
		<img src={lab} alt="lab" class="md:order-last" />
		<p class="col-span-2">
			I’m currently a final-year physics undergraduate at
			<a href="https://um.edu.my">University of Malaya</a>. I'm currently doing my final year
			project about real-time infrared imaging for agriculture under the
			<a href="https://prcum.um.edu.my">Photonics Research Center</a>. <br /><br />I’ve always been
			fascinated with how robust the mathematical world is in its systems and constructs, especially
			when applied in physics where any and every phenomenon can be predicted as if magic was hidden
			in the runes of calculus or code.
		</p>
	</div>
	<div class="grid grid-cols-1 gap-4 place-items-center md:grid-cols-2">
		<img src={whiteboard} alt="whiteboard" class="md:order-last aspect-[20/9]" />
		<p class="">
			But the truth behind the universe is not just in these symbols, but rather the approach, the
			thought, and the application. Understanding electromagnetic waves meant nothing until the
			invention of radio.
		</p>
	</div>
	<div class="grid grid-cols-2 gap-4 place-items-center md:grid-cols-4">
		<img src={experiment} alt="experiment" class="aspect-[20/9] col-span-2 md:order-last" />
		<img src={traffic} alt="traffic" class="aspect-[9/16] md:order-first md:row-span-2" />
		<img src={tutor} alt="tutor" class="md:row-span-2" />
		<p class="col-span-2">
			Which is why I've always been passionate about teaching the intricacies behind the gems of the
			universe, with a specific <a href="https://youtube.com/@teh_ais">YouTube channel</a> dedicated
			to that purpose. I'll always believe that, in this era, physics and engineering becomes the lock
			and key in innovation. Whoever wields them well steps foot in the next.
		</p>
	</div>
</div>

<style lang="postcss">
	p {
		@apply md:text-lg;
	}
	img {
		@apply w-full h-full object-cover rounded;
	}
	a {
		@apply text-red-500;
	}
</style>
