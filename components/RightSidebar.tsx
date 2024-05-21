import React from "react";

function RightSidebar({ user, transactions, banks }: RightSidebarProps) {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-co pb-8">
        <div className="profile-banner">
          <div className="profile">
            <div className="profile-img">
              <span className="text-5xl font-bold text-blue-500">
                {user.firstName[0]}
              </span>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
}

export default RightSidebar;
