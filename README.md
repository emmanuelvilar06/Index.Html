<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../src/output.css">
    <link rel="stylesheet" href="index.css">
    <title>My Portfolio</title>

</head>
<body> 
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Playfair+Display:wght@400;600&family=Montserrat:wght@400;600&display=swap');
      </style>
    <!--First Page-->
    <div class="w-screen h-screen">
        <!--NavBar-->

        <div class="relative  w-screen h-20 flex justify-between lg:justify-around items-center shadow-lg">
            <div class="lg:pl-24 pl-5 cursor-pointer">
                <h1 href="#home" class="text-[1.5rem] font-semibold"><span class="text-[2.5rem]  font-extrabold text-red-600">E</span>mman</h1>
            </div>
            
            <ul id="menu" class=" duration-500 top-20 lg:top-0 absolute lg:static flex-col lg:flex-row flex justify-center lg:justify-center lg:items-start items-center lg:pr-24 gap-10 lg:w-0 w-[50%] shadow-lg lg:shadow-none bg-white translate-x-[-100%] lg:translate-x-0 ">
                
                <li class="py-14 lg:py-0">
                    <a href="#"
                       class="relative group text-gray-800 font-medium text-lg">
                      Home
                      <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-[#da0e3b] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                <li class="py-14 lg:py-0">
                    <a onclick="openModal()"   href="#"
                       class="relative group text-gray-800 font-medium text-lg">
                      About
                      <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-[#da0e3b] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li class="py-14 lg:py-0">
                    <a href="#myhobbies"
                       class="relative group text-gray-800 font-medium text-lg">
                      MyHobbies
                      <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-[#da0e3b] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li class="py-14 lg:py-0">
                    <a href="#footer"
                       class="relative group text-gray-800 font-medium text-lg">
                      Contacts
                      <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-[#da0e3b] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
            </ul>
            <div id="burgerButton" class="flex lg:hidden cursor-pointer pr-5">
                <img class="w-10 h-10" src="/img/menu-burger-horizontal-fill_-removebg-preview.png" alt="">
            </div>
        </div>

        

        <!--Main Content-->

        <div id="home" class="w-screen h-[91.5%] flex justify-around items-center"> 
            <div class="flex flex-col items-center gap-6 w-[500px]">
                <div class="text-center ">
                    <h1 class="text-4xl font-bold overflow-y-hidden">
                      Hello, I am <span class="text-blue-500"><span class="overflow-y-hidden" id="typing"></span></span><span class="cursor"></span>
                    </h1>
                  </div>
                <div class="text-center">
                    <p>I'm Emmanuel vilar, aslo know as Manuel or Emman. I'm an ICT students at ICI Balagtas, aspiring to become successful IT professional.
                    </p>
                </div>
               <div>
                <button onclick="openModal()" class="px-14 py-2 bg-[#da0e3b] text-white font-bold hover:translate-y-[-10px] hover:translate-x-[10px] duration-150">
                    <h1>Other Info</h1>
                </button>
               </div>
            </div>
            <div class=" lg:flex hidden duration-500  w-[400px] h-[400px] bg-center bg-cover rounded-full border-blue-500 border-[10px]" style="background-image: url('/img/download__5_-removebg-preview.png');" >

            </div>
        </div>

        <!--Modal-->
        <div id="designDiv"  class="w-screen h-screen absolute bg-black/30 backdrop-blur-lg top-0 translate-x-[-100%] flex justify-center items-center">
            <div class="w-[50%] h-[700px] bg-white rounded-2xl flex-wrap">
                <div class="w-full justify-end flex">
                    <button onclick="closeBtn()" class="px-6 font-thin text-2xl">x</button>
                </div>
                <div class="w-full h-full flex justify-evenly items-center flex-wrap">
                    <div class="flex lg:gap-10 flex-col text-center">
                        <h1 class="font-bold text-2xl">Info About Me</h1>
                        <div class="flex flex-col lg:gap-10 gap-5">
                            <label for="">Emman B. Villar</label>
                            <label for="">I'm 18 Years Old</label>
                            <label for="">I'm from Bacood Tiaong Guiguinto Bulacan</label>
                            <label for="">I'm member of Iglesia ni Cristo</label>
                            <label for="">You can message me on 09451677141</label>
                        </div>
                    </div>
                    <div class="flex lg:gap-10 flex-col text-center">
                        <h1 class="font-bold text-2xl">My Skills</h1>
                        <div class="flex flex-col lg:gap-10 gap-5">
                            <label for="">Tumayo sa Bike</label>
                            <label for="">Mag Relapse</label>
                            <label for="">Mag luto habang lumalandi</label>
                            <label for="">Mag Piano</label>

                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!--Modal/-->


    </div>
    <!--Second Page-->
    <div id="myhobbies" class="w-screen h-full py-10">
        <div class="w-full flex justify-center items-center ">
            <h1 class="text-3xl py-5 font-bold overflow-y-hidden">Hobbies</h1>
        </div>

        <div class="w-full flex justify-around items-center py-[5px] " >
            <div class="w-[80%] flex flex-wrap gap-10 items-center justify-center">
                <div class=" w-[300px] h-[300px]" >
                    <div class=" relative flex items-end w-full h-[300px]  bg-cover bg-center" style="background-image: url('/img/COD\ \(1\).png');">
                        <div class=" absolute w-full h-full bg-[#013a62] bg-opacity-70"></div>
                          <div class=" text-white flex flex-col items-center justify-center relative w-full h-[100px] bg-[#013a62] bg-opacity-95">
                                <h1 class="font-bold">Call of Duty</h1>
                                <p>Playing Call of Duty with my friends</p>
                          </div>
                    </div>
                </div>
    
                <div class="bg-purple-300 w-[300px] h-[300px]" >
                    <div class=" relative flex items-end w-full h-[300px] bg-red-300 bg-cover bg-center" style="background-image: url('/img/COOKING.png');">
                        <div class=" absolute w-full h-full bg-[#d7891b] bg-opacity-70"></div>
                          <div class=" text-white flex flex-col items-center justify-center relative w-full h-[100px] bg-[#d7891b] bg-opacity-95">
                                <h1 class="font-bold">Cooking</h1>
                                <p>Cook for my family</p>
                          </div>
                    </div>
                </div>
    
               <div class="bg-purple-300 w-[300px] h-[300px]" >
                    <div class=" relative flex items-end w-full h-[300px] bg-red-300 bg-cover bg-center" style="background-image: url('/img/CYCLING.png');">
                        <div class=" absolute w-full h-full bg-[#458112] bg-opacity-70"></div>
                          <div class=" text-white flex flex-col items-center justify-center relative w-full h-[100px] bg-[#458112] bg-opacity-95">
                                <h1 class="font-bold">Cycling</h1>
                                <p>Travel different places using bike</p>
                          </div>
                    </div>
                </div>
    
                <div class=" w-[300px] h-[300px]" >
                    <div class=" relative flex items-end w-full h-[300px]  bg-cover bg-center" style="background-image: url('/img/ML.png');">
                        <div class=" absolute w-full h-full bg-[#d8c7f3] bg-opacity-70"></div>
                          <div class=" text-white flex flex-col items-center justify-center relative w-full h-[100px] bg-[#d8c7f3] bg-opacity-95">
                                <h1 class="font-bold">Mobile Legends</h1>
                                <p>Playing Mobile Legends with my friends</p>
                          </div>
                    </div>
                </div>
    
                <div class=" w-[300px] h-[300px]" >
                    <div class=" relative flex items-end w-full h-[300px]  bg-cover bg-center" style="background-image: url('/img/SLEEPING.png');">
                        <div class=" absolute w-full h-full bg-[#dc3d53] bg-opacity-70"></div>
                          <div class=" text-white flex flex-col items-center justify-center relative w-full h-[100px] bg-[#dc3d53] bg-opacity-95">
                                <h1 class="font-bold">Sleeping</h1>
                                <p>One of my favorite, sleeping all day</p>
                          </div>
                    </div>
                </div>
    
                <div class=" w-[300px] h-[300px]" >
                    <div class=" relative flex items-end w-full h-[300px]  bg-cover bg-center" style="background-image: url('/img/vOLLEYBALL.png');">
                        <div class=" absolute w-full h-full bg-[#41b797] bg-opacity-70"></div>
                          <div class=" text-white flex flex-col items-center justify-center relative w-full h-[100px] bg-[#41b797] bg-opacity-95">
                                <h1 class="font-bold">Volleyball</h1>
                                <p>Currently practicing volleyball</p>
                          </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!--Footer-->

    <div id="footer" class=" relative w-screen lg:h-[100%]">
        <div class="w-full h-[100%] bg-blue-500 flex items-center justify-center">
            <div class="w-[40%] lg:h-[400px] h-[700px] text-[#F3F4F6] font-poppins text-center flex items-center justify-center flex-col gap-10">
                <h1 class="text-xl">EMMANUEL B VILAR</h1>
                <p>Sometimes, we overthink things that may never even happen, battling fears we create in our own minds. I truly believe in the saying that we are our own greatest enemy and our strongest ally. The key lies in choosing to be kinder to ourselves, turning self-doubt into self-belief, and using our thoughts to build, not break, the life we deserve.</p>
                <div class="flex gap-10">
                    <div class="w-12 ">
                        <a href=" https://www.facebook.com/emman.vilar.3" target="_blank">
                            <img src="/img/facebook_-removebg-preview.png" alt="">
                        </a>
                    </div>
                    <div class="w-12 ">
                        <a href="https://www.instagram.com/dfntlynot_imman?igsh=MTN6bHpkNTQ1aWk1Nw==" target="_blank">
                            <img src="/img/instagram-icon_-removebg-preview.png" alt="">
                        </a>
                    </div>
                    <div class="w-12 ">
                        <a href="https://www.threads.net/@dfntlynot_imman?invite=0" target="_blank">
                            <img src="/img/twitter-square_-removebg-preview.png" alt="">
                        </a>
                    </div>
                   <div class="w-12 ">
                    <a href="t.me/emmnbvlr" target="_blank">
                        <img src="/img/telegram-circle_-removebg-preview.png" alt="">
                    </a>
                   </div>
                </div>
            </div>
            
        </div>
        <div>

        </div>
         

    </div>

    <script src="index.js"></script>
</body>
</html>
