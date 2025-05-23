import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import prisma from "../utils/db";
import BlogPostCard from "../components/general/BlogpostCard";

async function getData(userId: string) {
  return await prisma.blogPost.findMany({
    where: { authorId: userId },
    orderBy: { createdAt: "desc" },
  });
}

export default async function DashboardRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.id) {
    return <p>You must be logged in to view your dashboard.</p>;
  }

  const data = await getData(user.id);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-medium">Your Blog Articles</h1>
        <Link className={buttonVariants()} href="/dashboard/create/">
          Create Post
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((item) => (
          <BlogPostCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
