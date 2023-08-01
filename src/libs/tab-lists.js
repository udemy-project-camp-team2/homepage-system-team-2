import ImageTab from "../components/tab/ImageTab";
import LayoutTab from "../components/tab/LayoutTab";
import LineTab from "../components/tab/LineTab";

export const tabLists = [
  {
    id: 0,
    label: "layout",
    element: <LayoutTab />
  },
  {
    id: 1,
    label: "image",
    element: <ImageTab />
  },
  {
    id: 2,
    label: "line",
    element: <LineTab />
  }
]