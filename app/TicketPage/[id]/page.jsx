import TicketForm from "@/app/(components)/TicketForm";

const API_ENDPOINT = process.env.API_ENDPOINT;
const getTicketbyId = async (id) => {
  try {
    const res = await fetch(`${API_ENDPOINT}/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to get Ticket");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }) => {
  const Editmode = params.id === "new" ? false : true;
  let updateTicketData = {};
  if (Editmode) {
    updateTicketData = await getTicketbyId(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  return <TicketForm ticket={updateTicketData} />;
};

export default page;
