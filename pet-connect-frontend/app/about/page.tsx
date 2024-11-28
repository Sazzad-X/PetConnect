import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TeamMembers } from "@/constant";

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Story</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            pariatur mollitia suscipit aliquid. Deleniti, maiores molestiae cum
            voluptates aliquid nisi totam commodi odit sapiente rem ad nulla
            excepturi et facilis ipsum voluptate illo possimus culpa voluptas
            quaerat magni minima, ratione reiciendis laudantium? Laboriosam
            earum consequatur nisi porro debitis qui ducimus error quisquam
            delectus cum? Totam sit facilis ad distinctio minus incidunt
            adipisci voluptas, veritatis porro repellat. Ipsam amet incidunt
            aliquid dignissimos, est, earum, dolorum soluta qui id illum
            voluptatem ab praesentium delectus aliquam officiis porro quibusdam
            enim reiciendis natus nesciunt unde illo eaque doloribus assumenda?
            Deleniti quisquam aliquid nam ut nisi vero, harum commodi!
            Dignissimos libero consectetur, cumque ipsum eum odit autem,
            sapiente explicabo velit architecto doloribus! Ea cum corrupti,
            itaque saepe fugit expedita rem officiis recusandae quidem
            reiciendis perferendis odio
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            pariatur mollitia suscipit aliquid. Deleniti, maiores molestiae cum
            voluptates aliquid nisi totam commodi odit sapiente rem ad nulla
            excepturi et facilis ipsum voluptate illo possimus culpa voluptas
            quaerat magni minima, ratione
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Our Team</CardTitle>
          <CardDescription>Meet the people behind our success</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TeamMembers.map((item: any) => (
              <div
                key={item.name}
                className="flex flex-col items-center text-center"
              >
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarFallback>N</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
