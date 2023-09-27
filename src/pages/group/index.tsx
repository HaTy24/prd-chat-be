import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Group } from "../../packages/group/models/group";
import { groupService } from "../../packages/group/services/groupService";

export default function GroupsPage() {
  const [groups, setGroups] = useState<[Group]>();
  useEffect(() => {
    (async () => {
      const { group } = await groupService.getGroups();
      setGroups(group);
    })();
  }, []);

  return (
    <div>
      <Head>
        <title>Groups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mt-5">
        <div className="row">
          {groups?.map((group) => (
            <div className="col">
              <div className="card">
                <div className="card-header">{group.groupName}</div>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link href={`/group/${group.id}`}>
                    <button className="btn btn-primary">Join</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
