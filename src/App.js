import InitialPage from "./components/InitialPage/InitialPage";
import MainComponent from "./components/MaiComponent/MainComponent";
import { img } from "./images";
import ButtonImg from "./images/ButtonImg";
import HeadingIcon from "./images/HeadingIcon";

function App() {
  const allData = {
    fontFamily: "'Inter', sans-serif",
    primaryColor: "#12232F",
    secondaryColor: "#F3F6FA",
    hightlightedColor: "#F9683C",
    icon: <HeadingIcon primaryColor="#12232F" highlightedColor="#F9683C" />,
    buttonImg: <ButtonImg primaryColor="#12232F" />,
    initialPage: {
      title: "Step For Your Fast <br/> <span>Growing Business</span>.",
      img: img,
    },
    data: [
      {
        title: "Create Quality <br/> <span>Products</span>.",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        img: img,
      },
      {
        title: "Prioritize <span> Customers </span> <br/> Needs.",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        img: img,
      },
      {
        title: "Recognize and Use <br/>  <span> Technology </span>.",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        img: img,
      },
      {
        title: "Keep up with<br/><span>the  Times</span>.",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        img: img,
      },
      {
        title:
          "Looking for <span> Investors </span> <br/> As Much As Possible. ",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        img: img,
      },
      {
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
      <InitialPage
        {...allData.initialPage}
        icon={allData.icon}
        buttonImg={allData.buttonImg}
        totalSteps={allData.data.length}
      />
      {allData.data.map((el, i) => (
        <MainComponent
          {...el}
          key={i}
          id={i + 1}
          icon={allData.icon}
          buttonImg={allData.buttonImg}
        />
      ))}
    </div>
  );
}

export default App;
