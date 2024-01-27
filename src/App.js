import InitialPage from "./components/InitialPage/InitialPage";
import MainComponent from "./components/MaiComponent/MainComponent";
import { headingIcon, img } from "./images";

function App() {
  const allData = {
    fontFamily: "'Inter', sans-serif",
    primaryColor: "#12232F",
    secondaryColor: "#F3F6FA",
    hightlightedColor: "#F9683C",
    initialPage: {
      icon: headingIcon,
      title: "Step For Your Fast <br/> <span>Growing Business</span>.",
      img: img,
    },
    data: [
      {
        headerIcon: headingIcon,
        title: "Create Quality <br/> <span>Products</span>.",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        img: img,
      },
      {
        headerIcon: headingIcon,
        title: "Prioritize <span> Customers </span> <br/> Needs.",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        img: img,
      },
      {
        headerIcon: headingIcon,
        title: "Recognize and Use <br/>  <span> Technology </span>.",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        img: img,
      },
      {
        headerIcon: headingIcon,
        title: "Keep up with<br/><span>the  Times</span>.",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        img: img,
      },
      {
        headerIcon: headingIcon,
        title:
          "Looking for <span> Investors </span> <br/> As Much As Possible. ",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        img: img,
      },
      {
        headerIcon: headingIcon,
        title: "Form a Solid<br/>Workd <span>Team</span>",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        img: img,
      },
    ],
  };
  return (
    <div
      style={{
        fontFamily: allData.fontFamily,
        "--primaryColor": allData.primaryColor,
        "--secondaryColor": allData.secondaryColor,
        "--hightlightedColor": allData.hightlightedColor,
      }}
    >
      <InitialPage {...allData.initialPage} totalSteps={allData.data.length} />
      {allData.data.map((el, i) => (
        <MainComponent {...el} key={i} id={i + 1} />
      ))}
    </div>
  );
}

export default App;
