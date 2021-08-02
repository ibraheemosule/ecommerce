<template>
  <div class="contact">
    <div class="about text-red-900">
      <header class="flex justify-center bg-blue-200 sm:p-20 p-12 font-bold">
        <h1 class="capitalize max-w-2xl sm:text-4xl text-2xl text-center">
          contact us
        </h1>
      </header>
      <div class="flex flex-wrap justify-around my-16 sm:px-24 px-4">
        <div class="sm:w-1/2 w-full self-center my-12 sm:pr-12">
          <img
            class="border-solid rounded"
            src="@/assets/Images/contact2.jpg"
            alt="contact us image"
          />
        </div>
        <div class="sm:w-1/2 w-full">
          <div class="mission">
            <h2 class="font-extrabold text-xl mt-10 mb-4">
              Our Address
              <hr class="w-12 mt-2 border-1 border-solid border-gray-400" />
            </h2>
            <p class="text-gray-600">
              50, Ibraheem Musa Street, Off Idimu/Ejigbo Road, Opposite
              Chrisland College, Lagos State, Nigeria
            </p>
          </div>
          <div class="vision">
            <h2 class="font-extrabold text-xl mt-10 mb-4">
              Our Contact
              <hr class="w-12 mt-2 border-1 border-solid border-gray-400" />
            </h2>
            <ul class="mt-4 font-normal text-gray-600">
              <p>
                Click on the social media icon below of your choice to contact
                us
              </p>
              <li class="flex flex-wrap items-baseline justify-around mt-12">
                <a href="https://twitter.com/ibraheemsulay" class="w-8 h-full"
                  ><img src="@/assets/Images/twitter.png" alt="twitter logo"
                /></a>
                <a
                  href="https://facebook.com/sulayibraheem"
                  class="w-8 h-8 align-baseline"
                  ><img src="@/assets/Images/facebook.png" alt="facebook logo"
                /></a>
                <a href="https://instagram.com/ibraheemsulay" class="w-8 h-full"
                  ><img
                    src="@/assets/Images/instagram.png"
                    alt="instagram logo"
                /></a>
                <a
                  href="https://wa.me/+2348067153177"
                  target="_blank"
                  class="w-8 h-full"
                  ><img src="@/assets/Images/whatsapp.png" alt="whatsapp logo"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
footer {
  ul {
    list-style: none;
    li {
      text-decoration: none;
    }
  }
}
</style>
