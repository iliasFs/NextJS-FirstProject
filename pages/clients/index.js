import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const ClientsPage = () => {
  const clients = [
    { id: "1", name: "Manuel" },
    { id: "2", name: "George" },
    { id: "3", name: "Ilias" },
  ];

  return (
    <div>
      ClientsPage
      <ul className={styles.main}>
        {clients.map((client) => {
          return (
            <>
              <li key={client.id}>
                <Link href={`/clients/ ${client.name}`}>{client.name}</Link>
              </li>
            </>
          );
        })}
      </ul>
      <ul>
        {clients.map((client) => {
          return (
            <>
              <li key={client.id}>
                <Link
                  href={{
                    pathname: "/clients/[id]",
                    query: { id: client.name },
                  }}
                >
                  {client.name}
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default ClientsPage;
