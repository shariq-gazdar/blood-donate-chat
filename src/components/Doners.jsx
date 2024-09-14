import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // make sure you have imported the Firestore instance
import DonerCard from "./DonerCard";

const FetchCollection = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Function to fetch all documents from a collection
    const fetchEntries = async () => {
      try {
        // Reference the collection
        const querySnapshot = await getDocs(collection(db, "donors"));

        // Extract data from each document and set it to state
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id, // include document id
          ...doc.data(), // include all fields from the document
        }));

        setEntries(data);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div className="DonorsSection flex flex-col gap-x-12">
      {entries.map((entry) => (
        <DonerCard
          key={entry.name}
          name={entry.name}
          age={entry.age}
          bloodGroup={entry.bloodGroup}
        />
      ))}
    </div>
  );
};

export default FetchCollection;
