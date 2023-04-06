/* eslint-disable @next/next/no-img-element */

interface ITestimonialCard {
  objTestimonial: {
    client: {
      name: string;
      designation: string;
      imgSrc: string;
    };
    title: string;
    testimonial: string;
  };
}

export default function TestimonialCard(props: ITestimonialCard) {
  return (
    <div className="bg-white grid border rounded-lg overflow-hidden">
      <figure className="flex flex-col items-center justify-center p-8 text-center ">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
          <h3 className="text-lg font-semibold text-gray-900">
            {props.objTestimonial.title}
          </h3>
          <p className="my-4 font-light">{props.objTestimonial.testimonial}</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <img
            className="rounded-full w-9 h-9 object-cover"
            src={props.objTestimonial.client.imgSrc}
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium">
            <div>{props.objTestimonial.client.name}</div>
            <div className="text-sm font-light text-gray-500">
              {props.objTestimonial.client.designation}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
