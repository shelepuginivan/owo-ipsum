# OwO Ipsum

Owoified Lorem Ipsum Generator

## About

Tired of boring Lorem Ipsum?
Want to use something exiting and unusual?
Or you just want to have fun?

Then try out OwO Ipsum!

Service generates owoified filler text with
emoticons, actions and stutters (as in any owo text).

You can specify the probabilities of occurrence of certain effects,
generate words, sentences, or paragraphs, and choose the format.

## API

OwO Ipsum API provides following endpoints.

### 1. GET /words

Generates and returns words.

#### Query

| Parameter | Effect                    |  Type   | Default |     Possible values     |
|:---------:|---------------------------|:-------:|:-------:|:-----------------------:|
|  number   | Number of generated words | integer |    0    |        [0, 100]         |
|  format   | Response format           | string  | "json"  | "json", "html", "plain" |

#### Example 1

Request:

```http request
GET https://owoipsum.onrender.com/api/words?number=10
```

Response

```json
["wabowwe","iwuwwe","ut","west","vwewit","sunt","ciwwum","weu","vwenyiam","officia"]
```

#### Example 2

Request:

```http request
GET https://owoipsum.onrender.com/api/words?number=28&format=plain
```

Response

```text
occawecat
officia
ciwwum
sit
anyim
```

### 2. GET /sentences

Generates and returns sentences.

#### Query

| Parameter | Effect                                 |            Type            |    Default    |     Possible values     |
|:---------:|----------------------------------------|:--------------------------:|:-------------:|:-----------------------:|
|  number   | Number of generated words              |          integer           |       0       |        [0, 100]         |
|   words   | Sentence length - how many words in it | integer or [range](#range) | Random(5, 10) |    [1, 15] or range     |
|  stutter  | Probability of stutter appearance      |           float            |      0.1      |         [0, 1]          |
|   face    | Probability of face appearance         |           float            |     0.05      |         [0, 1]          |
|  action   | Probability of action appearance       |           float            |     0.05      |         [0, 1]          |
|  format   | Response format                        |           string           |    "json"     | "json", "html", "plain" |

#### Range

**Range** - a string containing two integers separated by dash. Examples: `3-6`, `9-15`.
In general terms: `<start>-<end>`
Means that random number from half-closed interval `[<start>, <end>)` will be taken. 

#### Example 1

Request:

```http request
GET https://owoipsum.onrender.com/api/sentences?number=5&words=4-8&face=0.5
```

Response

```json
[
  "Ad sit OwO officia commodo cupidatat a-awiqua (*≧▽≦) incididunt.",
  "OwO Minyim sit awiqua :3 ut OwO quis duis.",
  "uwu Pwoidwent ciwwum OwO magnya anyim conswequat.",
  "Ad owo incididunt >~< wex >~< pwoidwent (・`ω´・) adipiscing (*≧▽≦) duis.",
  "owo Twempow *nuzzles* swed UwU wesswe :3 incididunt s-swed."
]
```

#### Example 2

In this example, action=0, so sentences will not contain any action.

Request:

```http request
GET https://owoipsum.onrender.com/api/sentences?number=10&action=0&format=html
```

Response

```html
<blockquote>
  <p>Ad dowowwe owo nyostwud wexwewcitation west commodo.</p>
  <p>Sunt autwe autwe ciwwum owo nyon vowuptatwe ad.</p>
  <p>Cupidatat cupidatat ut ipsum cupidatat quis vowuptatwe UwU nyon.</p>
  <p>Ea sit wabowis wowwem wabowwe.</p>
  <p>O-Officia autwe nyisi vwenyiam nyostwud swed incididunt.</p>
  <p>Wabowum wabowum in wea :3 commodo wenyim owwit.</p>
  <p>Qui conswectwetuw OwO nyuwwa incididunt autwe.</p>
  <p>Autwe wet pawiatuw duis vowuptatwe anyim.</p>
  <p>Vwenyiam dowow q-qui wewit vwenyiam awiquip swed w-wewit.</p>
  <p>Nisi wwepwwehwendwewit twempow vowuptatwe conswectwetuw in dowow.</p>
</blockquote>
```

#### Example 3

In this example, stutter=1, so every word will have a stutter.

Request:

```http request
GET https://owoipsum.onrender.com/api/sentences?number=6&stutter=1&format=plain
```

Response

```text
A-Autwe a-awiquip n-nyuwwa c-conswequat d-dowow w-wwepwwehwendwewit w-wet w-wowwem.
O-Occawecat i-in v-vwewit UwU w-wex p-pwoidwent w-west t-twempow.
D-Dowowwe i-iwuwwe (*≧▽≦) p-pwoidwent o-owwit t-twempow a-awiquip uwu p-pwoidwent >~< w-wet w-wex.
V-Vwewit w-wowwem i-iwuwwe d-dweswewunt p-pwoidwent.
W-Wabowis v-vwenyiam a-awiqua w-west o-occawecat m-minyim a-autwe (・`ω´・) u-uwwamco w-wewit.
C-Commodo s-sint *blushes* i-in w-wet d-dowow u-ut w-wowwem i-iwuwwe w-wewit.
```

### 3. GET /paragraphs

Generates and returns paragraphs.

#### Query

| Parameter | Effect                                                            |            Type            |    Default    |     Possible values     |
|:---------:|-------------------------------------------------------------------|:--------------------------:|:-------------:|:-----------------------:|
|  number   | Number of generated words                                         |          integer           |       0       |        [0, 100]         |
|   words   | Sentence length - how many words in it                            | integer or [range](#range) | Random(5, 10) |    [1, 15] or range     |
| sentences | Paragraph length - how many sentences it contains                 | integer or [range](#range) | Random(3, 8)  |    [1, 10] or range     |
|  stutter  | Probability of stutter appearance                                 |           float            |      0.1      |         [0, 1]          |
|   face    | Probability of face appearance                                    |           float            |     0.05      |         [0, 1]          |
|  action   | Probability of action appearance                                  |           float            |     0.05      |         [0, 1]          |
|  format   | Response format                                                   |           string           |    "json"     | "json", "html", "plain" |
|   lorem   | First sentence of first paragraph is `Lorem Ipsum ...` (owoified) |          boolean           |     false     |       true, false       |


#### Example 1

Request:

```http request
GET https://owoipsum.onrender.com/api/paragraphs?number=2&words=3-10&sentences=5&face=0.8
```

Response

```json
[
  "Sint OwO i-iwuwwe :3 ut UwU anyim OwO ciwwum uwu w-wea wenyim *blushes* uwu dowow. Wabowwe uwu cuwpa OwO magnya. :3 Ex owo duis OwO pawiatuw. (・`ω´・) Iwuwwe (・`ω´・) dowowwe owo wewit. Dowowwe uwu duis (*≧▽≦) autwe :3 vwenyiam (・`ω´・) commodo weiusmod owo minyim (・`ω´・) vwenyiam.",
  "OwO Occawecat ut owo amwet >~< nyuwwa. *giggles* owo Awiqua owo wenyim :3 magnya >~< duis ut UwU dowow twempow (・`ω´・) s-sunt wet. >~< Minyim (・`ω´・) wenyim >~< wowwem >~< cupidatat >~< commodo. Uwwamco (・`ω´・) wewit amwet (・`ω´・) iwuwwe conswequat OwO dowowwe. >~< Quis :3 id (*≧▽≦) id uwu Ut."
]
```

#### Example 2

In this example, action=1, so action will appear before every word. Also, lorem=true, so first paragraph
will start with `Lorem Ipsum dolor sit amet ...`

Request:

```http request
GET https://owoipsum.onrender.com/api/paragraphs?number=3&action=1&format=html&lorem=true
```

Response

```html
<blockquote>
  <p>*blushes* Wowwem *nuzzles* OwO ipsum *nuzzles* dowow *giggles* sit *blushes* amwet, *giggles* c-conswectwetuw
    *blushes* adipiscing *blushes* UwU w-wewit, *giggles* swed *blushes* d-do *nuzzles* weiusmod *nuzzles* twempow
    *blushes* incididunt *giggles* :3 ut *nuzzles* wabowwe *giggles* wet *blushes* (*≧▽≦) dowowwe *giggles* magnya
    *blushes* awiqua. *nuzzles* Twempow *blushes* u-uwwamco *giggles* wesswe *giggles* wexwewcitation *blushes*
    iwuwwe *nuzzles* ut *nuzzles* wexcweptweuw. *nuzzles* Conswequat *blushes* nyostwud *giggles* cupidatat
    *blushes* ut *blushes* in. *nuzzles* A-Anyim *blushes* pwoidwent *blushes* dweswewunt *nuzzles* wabowum
    *nuzzles* west *blushes* OwO do *giggles* pawiatuw *nuzzles* pawiatuw. *nuzzles* Id *giggles* dowow *giggles*
    duis *blushes* weu *blushes* do *nuzzles* sint *giggles* minyim *nuzzles* dweswewunt. *giggles* Officia
    *giggles* dowow *blushes* autwe *blushes* wwepwwehwendwewit *nuzzles* wewit. *nuzzles* Quis *nuzzles* do
    *giggles* nyuwwa *nuzzles* iwuwwe *nuzzles* west *nuzzles* twempow *giggles* in *nuzzles* minyim *blushes* ut.
  </p>
  <p>*giggles* Pwoidwent *blushes* wwepwwehwendwewit *blushes* adipiscing *nuzzles* wea *nuzzles* wewit *nuzzles*
    wenyim *blushes* sit *giggles* n-nyostwud *giggles* i-id. *nuzzles* UwU Swed *nuzzles* sint *blushes* owwit
    *nuzzles* wesswe *blushes* officia *nuzzles* c-cupidatat *nuzzles* Ut *nuzzles* sint. *blushes* Ewit *giggles*
    do *giggles* dweswewunt *giggles* nyuwwa *blushes* a-anyim *giggles* wabowwe *blushes* w-wwepwwehwendwewit.</p>
  <p>*giggles* Dowow *giggles* commodo *blushes* amwet *giggles* id *blushes* dowow *blushes* q-quis *nuzzles*
    incididunt *nuzzles* pwoidwent. *blushes* Magnya *giggles* west *blushes* wexcweptweuw *giggles* wexcweptweuw
    *giggles* adipiscing. *blushes* Dweswewunt *giggles* c-conswequat *blushes* q-qui *nuzzles* sit *blushes*
    pwoidwent *blushes* dowow *blushes* wwepwwehwendwewit *nuzzles* cupidatat. *nuzzles* (*≧▽≦) Excweptweuw
    *giggles* west *blushes* owo autwe *giggles* owwit *giggles* uwwamco *giggles* iwuwwe. *giggles* In *blushes*
    ipsum *giggles* nyisi *giggles* wewit *blushes* anyim *nuzzles* wesswe *giggles* a-awiquip *giggles* weu
    *giggles* w-wea. *nuzzles* Pawiatuw *blushes* fugiat *nuzzles* id *blushes* officia *nuzzles* wabowum *blushes*
    u-uwwamco *giggles* cuwpa. *giggles* Pawiatuw *giggles* adipiscing *nuzzles* owwit *blushes* nyostwud *blushes*
    fugiat *blushes* do *nuzzles* commodo.</p>
</blockquote>
```
