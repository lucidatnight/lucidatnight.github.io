# Lucid — site source

The pages at lucidatnight.com are built from here. GitHub Pages serves the
output; this is what produces it.

```
src/
  build.py            run this; writes the built pages to the folder above
  index.src.html      the site
  sheep.src.html      Counting Sheep
  wake.src.html       Wake Up!
  dreams.data.js      the twelve Common Dreams cards
  research.data.js    the Research issues
  spec/st.b64.txt     the typewriter face, base64
```

Build:

```bash
cd src && python3 build.py
```

That writes `index.html`, `sheep.html`, `wake.html` and a `*-test.html`
variant of each into the parent folder. The test builds point at
`http://localhost:3999` instead of the live API, and the test site links to
the test games rather than the live ones.

Deploying means uploading the three real `.html` files to the
`lucidatnight.github.io` repo. The `*-test.html` files never go up.

## Where things live

- **Site**: GitHub Pages, repo `lucidatnight/lucidatnight.github.io`,
  custom domain lucidatnight.com.
- **API**: this machine, `~/lucid-server`, systemd unit `lucid`, port 3000,
  public at `https://sentinel.tailb152cd.ts.net` via Tailscale Funnel.
- **Database**: `~/lucid-server/data/lucid.db`, backed up nightly by
  `lucid-backup.timer` into `~/lucid-backups`, fourteen kept.

## History worth knowing

Reconstructed 2026-09-26. The original source tree was lost when the machine
holding it was recycled, and only the built pages survived on GitHub. Because
nothing is minified, every comment and every line of code came back intact —
the only things needing reversing were the injected font and the two data
files.

Verified rather than assumed: rebuilding from this tree reproduces the three
deployed pages **byte for byte**, checked by SHA-256 against what GitHub Pages
was serving at the time.

Two things did not survive, because they were never deployed: `climb.html`
and `occupied.html`. Those are genuinely gone.

## Don't let this happen twice

This tree is now the only copy of the source again. Worth committing it to the
repo, or anywhere that isn't one machine.
