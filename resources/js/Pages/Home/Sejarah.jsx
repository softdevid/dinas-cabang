import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";

const Sejarah = (props) => {
  return (
    <>
      <Head title={props.title} />
      <div className="bg-black">
        <div
          className="w-full overflow-auto h-[40vh] md:h-[60vh] z-0 bg-cover bg-center bg-opacity-80"
          style={{
            backgroundImage: `url(${"https://source.unsplash.com/600x400?random"})`,
          }}
        >
          <div className="items-center justify-center flex h-[40vh] md:h-[60vh]">
            <div className="h-auto w-full text-center md:text-left md:ml-32">
              <h1 className="text-6xl sm:text-center md:text-left text-white z-50">
                {props.title}
              </h1>
              <b className="text-2xl text-white">
                Selamat datang di {props.title}
              </b>
            </div>
          </div>
        </div>
      </div>
      {/* <h1 className="text-5xl text-center mt-5">{props.title}</h1>
            <div className="border-2 border-black w-[7%] mx-auto my-2"></div> */}
      <div className="hidden md:block mt-3" id="sejarah">
        <div className="flex">
          <div className="w-[35%] m-5 flex justify-end items-end">
            <div className="grid-cols-1 gap-8 grid">
              <img
                src="/ardianto.jpg"
                className="w-[300px] h-[300px] object-cover object-center rounded-lg shadow-lg"
              />
              <img
                src="/ardianto.jpg"
                className="w-[300px] h-[300px] object-cover object-center rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-[65%] m-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius
              quis dolor recusandae odio quisquam alias aliquid, iste asperiores
              quod consequuntur, quaerat nulla ex nihil incidunt numquam sit
              voluptatum iure quidem inventore molestias mollitia eum illo
              reprehenderit? Tempore dolore, blanditiis voluptatibus pariatur ad
              qui quod ducimus exercitationem maiores optio deserunt. Inventore
              dolorum fugit ex, exercitationem ipsa dolore modi? Doloribus et ad
              possimus, saepe sit dolorem. Veniam dolorem quas suscipit quis
              dignissimos obcaecati asperiores quia eaque, blanditiis doloribus
              fugit corporis neque dolore optio labore accusantium unde nam
              minus delectus ratione quibusdam ad omnis. Sint cupiditate
              excepturi optio earum magni obcaecati incidunt?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius
              quis dolor recusandae odio quisquam alias aliquid, iste asperiores
              quod consequuntur, quaerat nulla ex nihil incidunt numquam sit
              voluptatum iure quidem inventore molestias mollitia eum illo
              reprehenderit? Tempore dolore, blanditiis voluptatibus pariatur ad
              qui quod ducimus exercitationem maiores optio deserunt. Inventore
              dolorum fugit ex, exercitationem ipsa dolore modi? Doloribus et ad
              possimus, saepe sit dolorem. Veniam dolorem quas suscipit quis
              dignissimos obcaecati asperiores quia eaque, blanditiis doloribus
              fugit corporis neque dolore optio labore accusantium unde nam
              minus delectus ratione quibusdam ad omnis. Sint cupiditate
              excepturi optio earum magni obcaecati incidunt?
            </p>
          </div>
        </div>
      </div>
      <div className="block md:hidden my-5">
        <div className="mx-auto justify-center items-center">
          <img
            src="/ardianto.jpg"
            className="w-[300px] h-[300px] object-cover object-center mx-auto rounded-md shadow-lg"
          />
          <p className="m-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            mollitia sapiente quasi aspernatur. Et eius eveniet, perspiciatis
            illo libero temporibus recusandae corrupti sed! Rem aliquam quia
            culpa repudiandae illum veritatis in animi harum dolor maiores
            cupiditate eaque ex itaque unde, voluptatem a incidunt! Quam
            provident ea, ipsum maiores laboriosam illo repudiandae itaque,
            culpa, officiis odit blanditiis consequuntur. Enim fugiat cupiditate
            ipsa id repellat nesciunt accusamus ab iure, veritatis fuga. Fugiat
            vitae magni quia obcaecati odio nostrum quas corrupti blanditiis
            sint dolore doloribus quis voluptatem totam nesciunt sit, enim
            quibusdam? Ad blanditiis quas voluptatum molestiae velit odit
            officiis error nostrum consequuntur!
          </p>
        </div>
      </div>
    </>
  );
};

Sejarah.layout = (page) => <HomeLayout children={page} />;

export default Sejarah;
