
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function BookReferences() {
  // In a real app, these would be API-driven based on the topic
  const books = [
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      cover: "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      link: "#",
    },
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      cover: "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      link: "#",
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      cover: "https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg",
      link: "#",
    },
  ];

  return (
    <Card className="border-white/10 bg-explainify-darker shadow-md w-full">
      <CardHeader>
        <CardTitle className="text-lg text-white">Recommended Books</CardTitle>
        <CardDescription>Explore these resources for deeper learning</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {books.map((book) => (
            <a
              key={book.title}
              href={book.link}
              className="group flex flex-col items-center p-2 rounded-lg border border-transparent hover:border-explainify-purple/50 transition-all"
            >
              <div className="aspect-[2/3] w-32 mb-2 overflow-hidden rounded-md">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-medium text-white group-hover:text-explainify-purple line-clamp-1">
                {book.title}
              </h3>
              <p className="text-xs text-white/60">{book.author}</p>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function YouTubeLinks() {
  // In a real app, these would be API-driven based on the topic
  const videos = [
    {
      title: "JavaScript Promises In 10 Minutes",
      channel: "Web Dev Simplified",
      thumbnail: "https://i.ytimg.com/vi/DHvZLI7Db8E/hqdefault.jpg",
      link: "#",
    },
    {
      title: "Async JS Crash Course - Callbacks, Promises, Async/Await",
      channel: "Traversy Media",
      thumbnail: "https://i.ytimg.com/vi/PoRJizFvM7s/hqdefault.jpg",
      link: "#",
    },
    {
      title: "JavaScript Promise API",
      channel: "freeCodeCamp",
      thumbnail: "https://i.ytimg.com/vi/GGo3MVBFr1A/hqdefault.jpg",
      link: "#",
    },
  ];

  return (
    <Card className="border-white/10 bg-explainify-darker shadow-md w-full mt-6">
      <CardHeader>
        <CardTitle className="text-lg text-white">YouTube Tutorials</CardTitle>
        <CardDescription>Visual explanations to enhance your learning</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {videos.map((video) => (
            <a
              key={video.title}
              href={video.link}
              className="group flex flex-col p-2 rounded-lg border border-transparent hover:border-explainify-purple/50 transition-all"
            >
              <div className="aspect-video w-full mb-2 overflow-hidden rounded-md relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-sm font-medium text-white group-hover:text-explainify-purple line-clamp-2">
                {video.title}
              </h3>
              <p className="text-xs text-white/60">{video.channel}</p>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
