
const About = ()=>{
    return(
        <div>
          <div class="sm:flex items-center max-w-screen-xl">
        <div class="sm:w-1/2 p-10">
            <div class="image object-center text-center h-full">
                <img src="./aboutus.jpg"/>
            </div>
        </div>
        <div class="sm:w-1/2 p-5">
            <div class="text">
                <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
                <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-indigo-600">Our Company</span>
                </h2>
                <p class="text-gray-700">
                    Welcome to our official platform dedicated to sustainable agriculture, seed production, fertilizer
                    management, and animal husbandry. As a government initiative, we strive to empower farmers, enhance
                    food security, and promote responsible practices. Here’s what we’re all about:
                    <br/>
                    <br/>
                    <span class="font-semibold text-indigo-600">Agriculture and Seed:</span> We promote resilient crop varieties, best practices, and quality seeds to enhance yields and livelihoods.
                    <br/>
                    <br/>
                    <span class="font-semibold text-indigo-600">Fertilizer Management:</span> Our team educates farmers on balanced nutrient application and sustainable fertilizer use.
                    <br/>
                    <br/>
                    <span class="font-semibold text-indigo-600">Animal Husbandry:</span> We emphasize responsible breeding, health management, and waste reduction for livestock welfare.
                    <br/>
                    <br/>
                    
                </p>
            </div>
        </div>

        
    </div>
    <h2 class="text-2xl text-center bg-gray-200 font-bold text-green-900">Our Team</h2>

    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 lg:px-8 lg:py-5">
        <div class="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          <div class="bg-gray-100 px-5 py-10 rounded">
            <img class="object-cover w-32 h-32 rounded-full shadow" src="./Aakash.png" alt="Person" />
            <div class="flex flex-col justify-center mt-2">
              <p class="text-lg font-bold">Aakash Kandea</p>
              <p class="mb-4 text-xs text-gray-800">Design Team Lead</p>
              <p class="text-sm tracking-wide text-gray-800">
                Lead manages and leads the design team
              </p>
            </div>
          </div>
          <div  class="bg-gray-100 px-5 py-10 rounded">
            <img class="object-cover  w-32 h-32 rounded-full shadow" src="./rudal.jfif" alt="Person" />
            <div class="flex flex-col justify-center mt-2">
              <p class="text-lg font-bold">Rudal Kunwar</p>
              <p class="mb-4 text-xs text-gray-800">Backend Developer</p>
              <p class="text-sm tracking-wide text-gray-800">
                Handles things on the data layerof an application
              </p>
            </div>
          </div>
          <div  class="bg-gray-100 px-5 py-10 rounded">
            <img class="object-cover  w-32 h-32 rounded-full shadow" src="./pratik.jfif" alt="Person" />
            <div class="flex flex-col justify-center mt-2">
              <p class="text-lg font-bold">Pratik Raj Parajuli</p>
              <p class="mb-4 text-xs text-gray-800">JavaScript Developer</p>
              <p class="text-sm tracking-wide text-gray-800">
               Helps to include extra functionality to the project and build logic</p>
            </div>
          </div>
          <div  class="bg-gray-100 px-5 py-10 rounded">
            <img class="object-cover w-32 h-32 rounded-full shadow" src="./rajdura.jfif" alt="Person" />
            <div class="flex flex-col justify-center mt-2">
              <p class="text-lg font-bold">Raaz Dura</p>
              <p class="mb-4 text-xs text-gray-800">React Developer</p>
              <p class="text-sm tracking-wide text-gray-800">
               Handles API between laravel and react and manage 
              </p>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default About;