import games_list from "@/assets/games/list.json";
import Index from ".";

export default function List() {
  const games = games_list.slice(0, 20);

  return (
    <div className="grid grid-cols-1 gap-8 mt-4 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
      {games.map((g: GamesInfo) => (
        <Index key={g.slug} game={g} />
      ))}
    </div>
  );
}
