import { burbons } from '#/app/data/spirits';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Burbons</h1>
      <ul>
        {burbons.map((burbon) => {
          return (
            <li key={burbon.name} style={{marginBottom: '30px'}}>
              <strong>{burbon.name}</strong> (<a href={burbon.url}>{burbon.brewery}</a>) {burbon.proof}
              <br />
              {burbon.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
