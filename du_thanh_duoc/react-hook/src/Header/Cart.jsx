import useUser from "../hooks/useUser";

export default function Cart() {
  const { user } = useUser();

  return <div>Cart {user?.nation}</div>;
}
