import UserCart from "./components/card/cart";
import UserInfo from "./components/card/userInfo";

const User = () => {
  return (
    <section className="w-full h-screen">
      <div className="flex flex-col justify-items-center">
        <div className="md:max-w-md mx-2 my-5">
          <UserInfo />
        </div>
        <div className="md:max-w-md mx-2 my-5">
          <UserCart />
        </div>
      </div>
    </section>
  );
};
export default User;
