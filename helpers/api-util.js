export async function getAllEvents() {
  const response = await fetch(
    "https://udemy-nextjs-a1604-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvetns = await getAllEvents();
  return allEvetns.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvetns = await getAllEvents();
  return allEvetns.find((event) => event.id === id);
}
