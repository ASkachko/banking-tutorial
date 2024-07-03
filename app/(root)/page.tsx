import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { getAccounts } from "@/lib/actions/bank.actions";

async function Home({ searchParams: {id, page}}:SearchParamProps) {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({userId: loggedIn.$id})

if(!accounts) return

const accountsData = accounts?.data;

  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;


  const account = await getAccount({appwriteItemId})


  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[accountsData]}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 123.50}, {currentBalance: 400.00}]} />
    </section>
  );
}

export default Home;
