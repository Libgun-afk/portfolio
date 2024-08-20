import { FaLocationDot } from "react-icons/fa6";
import { CgShapeCircle } from "react-icons/cg";

export const Text = () => {
  return (
    <container>
      <div className=" flex flex-col justify-center content-center bg-slate-700 w-60% h-60% ">
        <img
          className="flex justify-center content-center w-60 h-60 object-cover"
          src="./hack.jpg"
          alt="hack"
        />
        <div className="">
          <h2 className="font-bold flex justify-center content-center">
            Hello
          </h2>
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div className="flex gap-5 justify-center content-center">
            <div className="flex ">
              <FaLocationDot />
              <a
                className="font-bold flex"
                href="https://www.google.com/search?q=ulaanbaatar+&sca_esv=c4a08539f66edc1e&sxsrf=ADLYWIL035-S8uCwlMn7Gzzd69IIfYuQ4w%3A1724073304939&ei=WEXDZvOBOdbj2roPrML_0Ac&ved=0ahUKEwjzjaHHkYGIAxXWsVYBHSzhH3oQ4dUDCA4&uact=5&oq=ulaanbaatar+&gs_lp=Egxnd3Mtd2l6LXNlcnAiDHVsYWFuYmFhdGFyIDIEECMYJzIIEAAYgAQYywEyDRAAGIAEGEMYyQMYigUyCxAAGIAEGJIDGIoFMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBSMUUUP0FWNgQcAF4AZABAJgBfaABiQeqAQMwLji4AQPIAQD4AQGYAgmgArQHwgIKEAAYsAMY1gQYR8ICBhAAGBYYHsICCBAAGBYYHhgPwgIFEAAYgASYAwCIBgGQBgiSBwMxLjigB-c4&sclient=gws-wiz-serp"
              >
                UlaanBaatar, Mongolia
              </a>
            </div>
            <div className="flex font-bold">
              <CgShapeCircle />
              <p>Available for new projects</p>
            </div>
          </div>
        </div>
      </div>
    </container>
  );
};
