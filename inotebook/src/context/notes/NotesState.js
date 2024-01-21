import { useState } from "react";
import NoteContext from "./NotesContext";

const NoteState = (props) => {
  const notesInitials = [
    {
      _id: "65abbdc46d70ff604b13a4f0",
      user: "65ab6993d23ccc4fe5c8793a",
      title: "Badli nakhyu me",
      description: "Jag ne malan jagg (Aaa to e j rese)",
      tag: "Ki fer nai pade",
      date: "2024-01-20T12:34:12.876Z",
      __v: 0,
    },
    {
      _id: "65abcb4d3a48b9fd2e0a043f",
      user: "65ab6993d23ccc4fe5c8793a",
      title: "WTF",
      description: "Vach loda Vach",
      tag: "Nai kevu",
      date: "2024-01-20T13:31:57.454Z",
      __v: 0,
    },
    {
      _id: "65abcbca6ce4ca996b14e00f",
      user: "65ab6993d23ccc4fe5c8793a",
      title: "Alarm",
      description: "Jag ne malan jaggggg.. hooooo",
      tag: "Jag  bhai jag",
      date: "2024-01-20T13:34:02.173Z",
      __v: 0,
    },
    {
      _id: "65abbdc46d70ff604b13a4f0",
      user: "65ab6993d23ccc4fe5c8793a",
      title: "Badli nakhyu me",
      description: "Jag ne malan jagg (Aaa to e j rese)",
      tag: "Ki fer nai pade",
      date: "2024-01-20T12:34:12.876Z",
      __v: 0,
    },
    {
      _id: "65abcb4d3a48b9fd2e0a043f",
      user: "65ab6993d23ccc4fe5c8793a",
      title: "WTF",
      description: "Vach loda Vach",
      tag: "Nai kevu",
      date: "2024-01-20T13:31:57.454Z",
      __v: 0,
    },
    {
      _id: "65abcbca6ce4ca996b14e00f",
      user: "65ab6993d23ccc4fe5c8793a",
      title: "Alarm",
      description: "Jag ne malan jaggggg.. hooooo",
      tag: "Jag  bhai jag",
      date: "2024-01-20T13:34:02.173Z",
      __v: 0,
    },
    {
      _id: "65abbdc46d70ff604b13a4f0",
      user: "65ab6993d23ccc4fe5c8793a",
      title: "Badli nakhyu me",
      description: "Jag ne malan jagg (Aaa to e j rese)",
      tag: "Ki fer nai pade",
      date: "2024-01-20T12:34:12.876Z",
      __v: 0,
    },
    {
      _id: "65abcb4d3a48b9fd2e0a043f",
      user: "65ab6993d23ccc4fe5c8793a",
      title: "WTF",
      description: "Vach loda Vach",
      tag: "Nai kevu",
      date: "2024-01-20T13:31:57.454Z",
      __v: 0,
    },
    {
      _id: "65abcbca6ce4ca996b14e00f",
      user: "65ab6993d23ccc4fe5c8793a",
      title: "Alarm",
      description: "Jag ne malan jaggggg.. hooooo",
      tag: "Jag  bhai jag",
      date: "2024-01-20T13:34:02.173Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitials);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
