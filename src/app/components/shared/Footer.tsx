
export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center py-8 max-w-7xl">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Abhirup Acharya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
