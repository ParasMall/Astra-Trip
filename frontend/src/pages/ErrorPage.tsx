import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-lg text-slate-600 mb-4">Sorry, an unexpected error has occurred.</p>
      <p className="text-sm text-slate-400 bg-slate-100 p-4 rounded-md">
        <i>{error?.statusText || error?.message}</i>
      </p>
      <a href="/" className="mt-8 bg-slate-900 text-white px-6 py-2 rounded-md hover:bg-slate-800 transition-colors">
        Return Home
      </a>
    </div>
  );
}
