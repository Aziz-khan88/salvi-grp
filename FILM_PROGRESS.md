# Film progress: how `#filmBar` works

The gold line in:

```html
<div class="film-progress"><i id="filmBar"></i></div>
```

is driven by the same normalized scroll value as the 173-frame hero film. The working source is in [public/meridian-source.html](public/meridian-source.html).

```js
function progress() {
  return Math.max(0, Math.min(1, window.scrollY / span));
}

filmBar.style.width = (progress() * 100) + "%";
```

`span` is calculated as the hero section's scrollable height:

```js
span = Math.max(1, hero.offsetHeight - window.innerHeight);
```

So, at the top of the film `progress()` is `0`, the gold bar is `0%`, and frame 1 is selected. At the end it is `1`, the bar is `100%`, and frame 173 is selected. The frame itself is eased separately with this line:

```js
curFrame += (targetFrame - curFrame) * 0.17;
```

That is why the visual film feels smooth while the progress line remains an accurate, direct reading of scroll position.
