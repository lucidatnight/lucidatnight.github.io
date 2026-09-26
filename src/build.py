"""Build the site from source.

index.src.html  ->  index.html        the real thing
                    test.html         same page, pointed at a local API
sheep.src.html  ->  sheep.html
                    sheep-test.html
wake.src.html   ->  wake.html
                    wake-test.html

The font is a base64 woff2 kept out of the source so the source stays readable
and diffable. The twelve Common Dreams cards and the Research issues live in
their own files for the same reason — so either can be edited without
scrolling through a three-thousand-line page — and are injected rather than
fetched, because a separate request would show an empty grid for a moment on
every load.

Reconstructed 2026-09-26 from the deployed pages after the original tree was
lost. Verified by rebuilding and comparing SHA-256 against what GitHub Pages
was serving, so this produces the live files exactly.
"""
import hashlib
import pathlib

HERE = pathlib.Path(__file__).parent
OUT = HERE.parent
FONT = (HERE / 'spec' / 'st.b64.txt').read_text().strip()

LIVE = "var API = 'https://sentinel.tailb152cd.ts.net';"
LOCAL = "var API = 'http://localhost:3999';"


def build(src, out, test_out, extra_test=(), needs_api=True):
    s = (HERE / src).read_text().replace('__FONT_URI__', FONT)
    if '__DREAMS_DATA__' in s:
        s = s.replace('__DREAMS_DATA__', (HERE / 'dreams.data.js').read_text().rstrip('\n'))
    if '__RESEARCH_DATA__' in s:
        s = s.replace('__RESEARCH_DATA__', (HERE / 'research.data.js').read_text().rstrip('\n'))
    if needs_api:
        assert LIVE in s, '%s does not set the API' % src
    (OUT / out).write_text(s)
    t = s.replace(LIVE, LOCAL)
    for a, b in extra_test:
        t = t.replace(a, b)
    (OUT / test_out).write_text(t)
    print('%-18s -> %s  %s' % (src, out, hashlib.sha256(s.encode()).hexdigest()[:16]))


# The test build of the site has to link to the test builds of the games, or
# the local page sends you to the ones talking to the real server.
build('index.src.html', 'index.html', 'test.html',
      extra_test=[('href="sheep.html"', 'href="sheep-test.html"'),
                  ('href="wake.html"', 'href="wake-test.html"')])
build('sheep.src.html', 'sheep.html', 'sheep-test.html')
build('wake.src.html', 'wake.html', 'wake-test.html')
