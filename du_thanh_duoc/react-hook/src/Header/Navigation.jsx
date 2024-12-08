import useUser from "../hooks/useUser";

export default function Navigation() {
  const { user } = useUser();

  return <div>Navigation {user?.nation}</div>;
}
