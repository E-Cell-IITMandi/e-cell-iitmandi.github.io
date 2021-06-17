function createEventString(event) {
  const defaultPoster = "https://e-cell-iitmandi.github.io/E-Cell_Website/posters/bob2.jpeg";

  console.log("eve", event);

  const eventString = `
      <div class="event">
        <div class="event-con">
          <div class="flex-c">
            <div class="event-img">
              <img src="` + (event.posterUrl ? event.posterUrl : defaultPoster) + `">
            </div>
            <div class="event-desc">
              <p>
                ` + event.eventName + `
              </p>
            </div>
            <div class="event-link">
              <a href="">More Info</a>
            </div>
          </div>
        </div>
      </div>
      `;

  console.log("He");

  return eventString;
}

addEvents = (docsData) => {
  // Pass the firebase docs here
  const events = []
  docsData.forEach(doc => {
    events.push(doc.data());
  });

  let eventsRows = "";

  for (let i = 0; i < 6; i += 3) {
    // We will add three three pairs
    const event1 = createEventString(events[i]);
    const event2 = createEventString(events[i + 1]);
    const event3 = createEventString(events[i + 2]);

    console.log(event1);

    const eventRow = `
        <div class="events-row flex">
          ` + event1 + event2 + event3 + `
        </div>
        `;

    eventsRows += eventRow;
  }

  document.getElementById("events-container").innerHTML = eventsRows;
}

fetchDataFromFirebase = () => {
  const db = firebase.firestore();
  db.collection("contests").get()
    .then((data) => {
      addEvents(data);
    }).catch((err) => {
      // We will show some default events in this case
      console.log("Event fetch error", err);
    });
}
