import axios from "axios";
import React from "react";

const page = async ({ params }: any) => {
  let id = params.id;
  console.log(id);
  let data = await axios.get(
    `http://localhost:1337/api/blogs/${id}?populate=*`
  );
  let response = data.data.data;
  let description = response.attributes.description;
  console.log(description);

  return (
    <div className="container mx-auto xl:max-w-[1100px] pt-[15px]">
      <div className="h-[250px] w-full">
        <img
          src={`http://localhost:1337${response.attributes.image.data.attributes.url}`}
          alt=""
          className="w-full h-[100%] object-cover"
        />
      </div>
      <div
        className="text-white pt-[20px] pb-[40px]"
        dangerouslySetInnerHTML={{ __html: `${description}` }}
      ></div>
    </div>
  );
};

export default page;
