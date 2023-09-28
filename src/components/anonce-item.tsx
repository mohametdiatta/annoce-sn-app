// "use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

function AnnonceItem() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>
          <Image
            src={
              "https://images.unsplash.com/photo-1695754190419-bedddd21ccb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            }
            width={320}
            alt=""
            className="rounded-sm h-[130px]"
            height={20}
          />
        </CardTitle>
        <CardDescription>
          Les candidats sont de plus en plus en quête de sens au travail.
          Au-delà de l’emploi en lui-même et des missions proposées.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">+221783071757</Label>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Voir plus </Button>
      </CardFooter>
    </Card>
  );
}

export default AnnonceItem;
