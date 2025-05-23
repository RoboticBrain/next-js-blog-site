import { handleSubmission } from "@/app/actions";
import { Submitbutton } from "@/app/components/general/submitbutton";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

export default function CreateBlogRoute() {
    return (
        <>
            <CardHeader>
                <CardTitle>Create Post</CardTitle>
                <CardDescription>
                    Create a new post to share with the world.
                </CardDescription>
                <CardContent>
                  <form className="flex flex-col gap-4" action={handleSubmission}>
                    <div className="flex flex-col gap-4">
                        <Label>Title</Label>
                        <Input name="title" required type="text" placeholder="Title"></Input>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Label>Content</Label>
                        <Textarea name="content" required placeholder="Content"></Textarea>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Label>Image URL</Label>
                        <Input name="url" required type="url" placeholder="image url"></Input>
                    </div>
                    <div className="flex gap-4 flex-col">
                       <Submitbutton/>
                    </div>
                  </form>

                </CardContent>
            </CardHeader>
        </>
    )
}