import Head from "next/head";
import { groupService } from "../../packages/group/services/groupService";
import { useEffect, useState } from "react";
import { Group } from "../../packages/group/models/group";

export default function GroupsPage() {
  const [groups, setGroups] = useState<[Group]>();
  useEffect(() => {
    (async () => {
      const { group } = await groupService.getGroups();
      setGroups(group);
    })();
  }, []);

  console.log(groups);

  return (
    <div>
      <Head>
        <title>Groups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {groups?.map((group) => (
          <li>{group.groupName}</li>
        ))}
      </div>
    </div>
  );
}
