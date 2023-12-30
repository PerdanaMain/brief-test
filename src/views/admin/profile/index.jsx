import axios from "axios";
import { useEffect, useState } from "react";

import Banner from "./components/Banner";
import General from "./components/General";
import Project from "./components/Project";
import Storage from "./components/Storage";
import Upload from "./components/Upload";

const ProfileOverview = () => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [email, setEmail] = useState("");
  const [loc, setLoc] = useState("");

  useEffect(() => {
    decodeToken();
  }, []);

  const decodeToken = async () => {
    const token = localStorage.getItem("credentialResponse");
    if (token) {
      const decodedToken = JSON.parse(token);
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${decodedToken}`,
            },
          }
        );
        setName(res.data.name);
        setPicture(res.data.picture);
        setEmail(res.data.email);
        setLoc(res.data.locale);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-4 lg:!mb-0">
          <Banner name={name} email={email} picture={picture} loc={loc} />
        </div>

        <div className="col-span-3 lg:!mb-0">
          <Storage />
        </div>

        <div className="z-0 col-span-5 lg:!mb-0">
          <Upload />
        </div>
      </div>
      {/* all project & ... */}

      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <Project />
        </div>
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-5">
          <General />
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
