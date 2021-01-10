function Icons(props) {
  switch (props.desc) {
    case "clear":
      return (
        <img
          style={{ height: props.size, width: props.size }}
          alt="Sunny Icon"
          src="../clear-day.svg"
        />
      );
    case "cloudy":
      return (
        <img
          style={{ height: props.size, width: props.size }}
          alt="Cloudy Icon"
          src="../cloudy.svg"
        />
      );
    case "overcast":
      return (
        <img
          style={{ height: props.size, width: props.size }}
          alt="Overcast Icon"
          src="../overcast.svg"
        />
      );
    case "mist":
      return (
        <img
          style={{ height: props.size, width: props.size }}
          alt="Mist Icon"
          src="../mist.svg"
        />
      );
    case "snow":
      return (
        <img
          style={{ height: props.size, width: props.size }}
          alt="Snow Icon"
          src="../snow.svg"
        />
      );
    case "rain":
      return (
        <img
          style={{ height: props.size, width: props.size }}
          alt="Rain Icon"
          src="../rain.svg"
        />
      );
    case "drizzle":
      return (
        <img
          style={{ height: props.size, width: props.size }}
          alt="Drizzle Icon"
          src="../drizzle.svg"
        />
      );
    case "thunderstorm":
      return (
        <img
          style={{ height: props.size, width: props.size }}
          alt="Thunderstorms Icon"
          src="../thunderstorms.svg"
        />
      );
    case "clearNight":
      return (
        <img
          style={{ height: props.size, width: props.size }}
          alt="ClearNight Icon"
          src="../clear-night.svg"
        />
      );

    default:
      console.log("badReq: " + props.desc);
      return <div></div>;
  }
}

export default Icons;
