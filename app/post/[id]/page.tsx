
import prisma from "@/app/utils/db";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
async function getData(id: string) {
    const data = await prisma?.blogPost.findUnique({
        where: {
            id: id,
        }
       
    }

    )
    if(!data){
        return notFound();
    }
    console.log(data)
    return data;;
}
type Params = Promise<{id: string}>
export default async function IdPage({params}: {params: Params}) {
    const {id} = await params;
    const data = await getData(id);
    return (
        <>
        <div className="max-w-3xl mx-auto py-8 px-4">
            <Link  href={`/dashboard`} className={buttonVariants({variant:"secondary"})}>Back to the posts
            </Link>
            <div className="mb-8 mt-6 ">
                <h1 className="text-3xl font-bold tracking-tight mb-4 ">{data.title}</h1>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="relative size-10 overflow-hidden rounded-full">
                            <Image src={data.authorImage} alt={data.authorName} fill  className="object-cover"/>
                        </div>
                   <p className="font-medium">{data.authorName}</p>
                    </div>
                    <p className="text-sm text-gray-500">{new Intl.DateTimeFormat('en-US', {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    }).format(data.createdAt)} 
                    </p>

                </div>
            </div>
            <div className="relative h-[400px] w-full mb-8 overflow-hidden rounded-lg">
                <Image src={data.imageUrl} alt={data.title} fill className="object-cover" priority/>
            </div>
           <Card>
            <CardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quas nostrum natus nemo ipsa officiis ab ipsum expedita quidem cupiditate! Mollitia et autem totam nostrum maxime quam quod distinctio placeat sit molestias ipsam molestiae quibusdam cum, dolore sunt quo ipsum repellendus. Consequuntur ut, quidem cupiditate exercitationem delectus ducimus deleniti voluptas! Maxime, maiores! Quia id aut corporis mollitia sint officia corrupti deserunt magni hic earum maxime distinctio tempora voluptatem voluptates suscipit necessitatibus blanditiis aliquam ab explicabo voluptas obcaecati, qui, sed sunt repellendus? Ab optio facere inventore placeat doloremque quam tempora amet, dolores quibusdam odio est, quisquam aut nisi illo autem maiores aspernatur. Quasi quisquam, mollitia a delectus, expedita cum maxime illum temporibus corporis officia tenetur similique quis optio quae voluptates ratione consequatur, nam veritatis deserunt libero nostrum! Quam doloremque similique laudantium eos sequi nulla laborum id beatae ea voluptate rerum ipsa vel voluptatibus provident, ipsum ducimus dignissimos repellat incidunt, minima at. Molestiae illum veniam atque dolor accusamus odio voluptas repellendus, hic repellat beatae doloremque cum officia non alias velit itaque possimus! Commodi accusamus odio quia cupiditate minus incidunt, natus optio ducimus suscipit laboriosam aspernatur harum ipsa. Consectetur repellat iusto cumque corporis tempore consequuntur eius eum natus, omnis nesciunt optio quas ut? Nostrum blanditiis perspiciatis quod quaerat mollitia quisquam expedita magnam sapiente, nisi ducimus at saepe optio sed ratione, nihil officia rem minus amet. Error sequi corrupti quod? Ipsam in temporibus dolorem optio aliquam impedit voluptates tempore nemo perferendis nobis ipsum, eum tenetur veniam maxime sapiente possimus adipisci magnam laudantium suscipit repellendus quidem perspiciatis explicabo. Natus quae laboriosam animi iure facilis tempora quas obcaecati cumque commodi, blanditiis beatae itaque velit rerum sunt asperiores consequatur sit quo vero vel mollitia dolorum doloribus unde! Iusto vel deleniti, alias cumque, distinctio ipsum expedita ullam aspernatur illo id ad accusamus aliquam eos reiciendis sequi dolores error architecto illum esse odit natus! Natus voluptatibus a enim, laudantium perspiciatis optio. Neque nostrum odit consequuntur culpa quod recusandae quae, quo esse at quisquam sint repudiandae cum explicabo? Consequuntur veritatis molestias sint. A vel consequatur repellat exercitationem earum, tempore atque deleniti eos aliquid laborum. Dicta repellendus modi eveniet, voluptatem iste nihil ab accusantium neque assumenda temporibus dolor ratione consequuntur velit autem delectus cum repellat asperiores quibusdam? Recusandae nihil repellendus ut praesentium temporibus, voluptate ipsum tempore. Numquam repellat consectetur at accusantium. Error nisi maxime ex aliquid, laborum dolore deleniti fuga voluptate odit amet eveniet eum? Nostrum accusamus earum ex omnis neque est explicabo repellendus labore tempore iure beatae voluptatibus quos aspernatur a facere quaerat inventore voluptas iusto nulla, recusandae at optio maxime! Repellat, veniam. Eos maxime numquam commodi quisquam iusto aut recusandae vero vel corrupti! Dolores dolorum corrupti distinctio eaque magni nulla laborum at suscipit vel culpa, omnis unde et officiis architecto, voluptatem maiores iusto. Minima, aspernatur? Quod quasi vero nesciunt dolorum placeat exercitationem culpa? Est enim quisquam omnis minus aut nam inventore, sunt id, natus nisi qui iusto! Qui labore ipsa, iusto minima architecto sequi, quaerat at doloribus esse commodi a dolore ut vero necessitatibus quisquam repellendus. Nostrum, impedit sit?
            </CardContent>
           </Card>
        </div>
        </>
    )
}