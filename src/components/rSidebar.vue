<template>
	<div class="w-[20rem] max-lg:hidden fixed right-0 z-10 top-[4rem]">
		<div class="mx-[1rem] mt-[1rem] rounded-[1rem] bg-green-50 p-[1rem]">
			<span class="text-ntext font-black">TÁC GIẢ ĐƯỢC YÊU THÍCH</span>
			<template v-for="(v, i) in Array(5)" :key="i">
				<a
					href=""
					class="flex hover:bg-green-100 py-[1rem] px-[0.5rem]"
				>
					<svg
						class="w-[1.5rem] h-[1.5rem]"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<g clip-path="url(#clip0_473_19)">
							<path
								d="M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zM8.016 8.633a1.616 1.616 0 00-.2.806V13.5H5.931V6.172h1.8v.9h.039a3.009 3.009 0 011.018-.732 3.45 3.45 0 011.449-.284c.246-.003.491.02.732.068.158.024.309.08.444.164l-.759 1.832a2.09 2.09 0 00-1.093-.26c-.33-.01-.658.062-.954.208a1.422 1.422 0 00-.591.565zm2.9 6.918H9.355L14.7 2.633c.426.272.828.58 1.2.922l-4.984 11.996z"
							></path>
						</g>
						<defs>
							<clipPath id="clip0_473_19">
								<path d="M0 0h20v20H0z"></path>
							</clipPath>
						</defs>
					</svg>
					<span class="ml-[0.5rem]">R place: {{ i }}</span>
				</a>
			</template>
		</div>
	</div>
</template>