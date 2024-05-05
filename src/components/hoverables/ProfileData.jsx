import { useContext } from "react";
import { GlobalDataApi } from "../../context/GlobalData";

const ProfileData = () => {
    const { data } = useContext(GlobalDataApi);
    let handleLogout = () => {
      localStorage.removeItem("TOKEN");
      window.location.reload();
      navigator("/");
    };
    return (
      <div className="tooltip-box flex flex-col gap-1">
        <article className="pl-1 border-b-[1px] text-neutral-800">
          <h1 className="font-semibold text-[16px] text-neutral-700">
            {" "}
            Hello <span className="text-neutral-800 font-bold">
              {data.name}
            </span>{" "}
          </h1>
          <p className="text-[13px]"> Shop with latest fashion here !! </p>
        </article>
        <article className="pl-1 py-2 border-b-[1px] text-neutral-800">
          <ul>
            <li>Orders</li>
            <li>WishList</li>
            <li>Gift Cards</li>
            <li>Contact Us</li>
            <li>Shop Insiders</li>
          </ul>
        </article>
        <article className="pl-1 py-2 border-b-[1px] text-neutral-800">
          <ul>
            <li>Sparrow Credits</li>
            <li>Coupons</li>
            <li>Saved Cards</li>
            <li>saved VPA</li>
            <li>Saved Addresses</li>
          </ul>
        </article>
        <article className="pl-1 py-2 text-neutral-800">
          <ul>
            <li>Edit Profile</li>
            <li onClick={handleLogout} className="cursor-pointer">
              Logout
            </li>
          </ul>
        </article>
      </div>
    );
  };

  export default ProfileData;