<template>
  <div class="about text-red-900">
    <header
      class="
        flex
        justify-center
        bg-blue-200
        sm:p-20
        p-12
        font-bold
        text-red-900
      "
    >
      <h1 class="capitalize max-w-2xl sm:text-4xl text-2xl text-center">
        About Us
      </h1>
    </header>
    <div class="flex flex-wrap justify-around my-16 sm:px-24 px-4">
      <div class="sm:w-1/2 w-full self-center my-12">
        <img
          class="border-solid rounded"
          src="@/assets/Images/about.jpg"
          alt="about us image"
          loading="lazy"
        />
      </div>
      <div class="sm:w-1/2 w-full text-gray-600">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
          nisl ut lacus commodo posuere viverra in erat. Pellentesque volutpat
          eu felis in aliquet. Sed vehicula iaculis condimentum. Proin porta
          ligula eu consectetur blandit. Donec nec pharetra urna. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Aliquam lacus ipsum,
          elementum varius velit rutrum, tempor fermentum nibh. Praesent egestas
          massa dolor, sed hendrerit mi vulputate ac. Praesent eleifend ultrices
          augue. Morbi blandit diam nec consectetur finibus. Sed a lorem est.
          Pellentesque dictum vestibulum ullamcorper. Maecenas eget tempor ante,
          eleifend varius arcu. Suspendisse a mollis mauris.
        </p>
        <div class="mission">
          <h2 class="font-extrabold text-xl mt-10 mb-4 text-red-900">
            Our Mission
            <hr class="w-12 mt-2 border-1 border-solid border-gray-400" />
          </h2>
          <p>
            Praesent eleifend ultrices augue. Morbi blandit diam nec consectetur
            finibus. Sed a lorem est. Pellentesque dictum vestibulum
            ullamcorper. Maecenas eget tempor ante, eleifend varius arcu.
            Suspendisse a mollis mauris.
          </p>
        </div>
        <div class="vision">
          <h2 class="font-extrabold text-xl mt-10 mb-4 text-red-900">
            Our Vision
            <hr class="w-12 mt-2 border-1 border-solid border-gray-400" />
          </h2>
          <p>
            Praesent eleifend ultrices augue. Morbi blandit diam nec consectetur
            finibus. Sed a lorem est. Pellentesque dictum vestibulum
            ullamcorper. Maecenas eget tempor ante, eleifend varius arcu.
            Suspendisse a mollis mauris.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
