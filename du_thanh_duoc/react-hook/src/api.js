export default function getUser() {
  return new Promise((resolve) => {
    setTimeout((_) => {
      resolve({
        nation: "USD",
        city: "New York",
        location: {
          street: "1 XXX",
          house: "Department",
        },
      });
    }, 1000);
  });
}
