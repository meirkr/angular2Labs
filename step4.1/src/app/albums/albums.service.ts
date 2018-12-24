import {Album} from "../common/album.model";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsService {
    public getAlbums() {
        return Observable
            .interval(1000)
            .take( this._albums.length)
            .map(i => this._albums[i])
            .bufferCount(2);
    }

    private _albums:Album[] = [
        {
            "name": "Abbey Road",
            "playcount": 40393427,
            "mbid": "e12f53a3-e912-321d-bdc7-ed17ec525ec0",
            "url": "https://www.last.fm/music/The+Beatles/Abbey+Road",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2ce29f74a6f54b8791e5fdacc2ba36f5.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2ce29f74a6f54b8791e5fdacc2ba36f5.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2ce29f74a6f54b8791e5fdacc2ba36f5.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2ce29f74a6f54b8791e5fdacc2ba36f5.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Sgt. Pepper's Lonely Hearts Club Band",
            "playcount": 23643299,
            "mbid": "44b7cab1-0ce1-404e-9089-b458eb3fa530",
            "url": "https://www.last.fm/music/The+Beatles/Sgt.+Pepper%27s+Lonely+Hearts+Club+Band",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/5a63743f4ba244678b74d90ad868504f.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/5a63743f4ba244678b74d90ad868504f.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/5a63743f4ba244678b74d90ad868504f.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/5a63743f4ba244678b74d90ad868504f.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Revolver",
            "playcount": 24324498,
            "mbid": "c7f648e2-9c6d-32df-b5ee-ccab3e696a51",
            "url": "https://www.last.fm/music/The+Beatles/Revolver",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/fafc74a8f45241acc10158be6e2d8270.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/fafc74a8f45241acc10158be6e2d8270.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/fafc74a8f45241acc10158be6e2d8270.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/fafc74a8f45241acc10158be6e2d8270.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Rubber Soul",
            "playcount": 20567857,
            "mbid": "bab157e1-772c-3173-86eb-e7538732fec9",
            "url": "https://www.last.fm/music/The+Beatles/Rubber+Soul",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/72ed10a859fb4c1fb29a546078ec737d.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/72ed10a859fb4c1fb29a546078ec737d.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/72ed10a859fb4c1fb29a546078ec737d.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/72ed10a859fb4c1fb29a546078ec737d.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Magical Mystery Tour",
            "playcount": 14429531,
            "mbid": "93c8ddcd-3e09-3a00-9159-443205091f3d",
            "url": "https://www.last.fm/music/The+Beatles/Magical+Mystery+Tour",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
                {
                    "#text": "https://lastfm-img2.akamaized.net/i/u/34s/3947ccc7613d4555ad120bf8b5c68e59.png",
                    "size": "small"
                },
                {
                    "#text": "https://lastfm-img2.akamaized.net/i/u/64s/3947ccc7613d4555ad120bf8b5c68e59.png",
                    "size": "medium"
                },
                {
                    "#text": "https://lastfm-img2.akamaized.net/i/u/174s/3947ccc7613d4555ad120bf8b5c68e59.png",
                    "size": "large"
                },
                {
                    "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/3947ccc7613d4555ad120bf8b5c68e59.png",
                    "size": "extralarge"
                }
            ]
        },
        {
            "name": "Let It Be",
            "playcount": 13561493,
            "mbid": "e235d002-957b-382b-b57f-b2ddad1bb66b",
            "url": "https://www.last.fm/music/The+Beatles/Let+It+Be",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/a152d53917b94c968087513a71d6ab3e.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/a152d53917b94c968087513a71d6ab3e.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/a152d53917b94c968087513a71d6ab3e.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/a152d53917b94c968087513a71d6ab3e.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "1",
            "playcount": 16704312,
            "mbid": "344362ed-39c0-40bb-b55f-2c9627e5d767",
            "url": "https://www.last.fm/music/The+Beatles/1",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/c287f9f433293ca72d9866fb18b460a5.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/c287f9f433293ca72d9866fb18b460a5.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/c287f9f433293ca72d9866fb18b460a5.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/c287f9f433293ca72d9866fb18b460a5.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Help!",
            "playcount": 16321683,
            "mbid": "0a5c6fda-9c42-4cdd-827d-e43896e87d9b",
            "url": "https://www.last.fm/music/The+Beatles/Help%21",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/23c5e3b982d441d690315efa25844ddd.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/23c5e3b982d441d690315efa25844ddd.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/23c5e3b982d441d690315efa25844ddd.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/23c5e3b982d441d690315efa25844ddd.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Please Please Me",
            "playcount": 13016513,
            "mbid": "b60a2517-687f-414c-89fe-ad89a875ecd6",
            "url": "https://www.last.fm/music/The+Beatles/Please+Please+Me",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/4dbfa5fc46b4429299a4dbe37f7c2a01.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/4dbfa5fc46b4429299a4dbe37f7c2a01.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/4dbfa5fc46b4429299a4dbe37f7c2a01.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/4dbfa5fc46b4429299a4dbe37f7c2a01.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "A Hard Day's Night",
            "playcount": 12263928,
            "mbid": "19aacb3a-8d3b-3939-917c-fe6bff1d10db",
            "url": "https://www.last.fm/music/The+Beatles/A+Hard+Day%27s+Night",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/e3f41a1255ba4d6c96dcf2c2489068a5.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/e3f41a1255ba4d6c96dcf2c2489068a5.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/e3f41a1255ba4d6c96dcf2c2489068a5.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/e3f41a1255ba4d6c96dcf2c2489068a5.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "With The Beatles",
            "playcount": 10543887,
            "mbid": "c33e82e8-efba-49ae-83f3-adc3088985ff",
            "url": "https://www.last.fm/music/The+Beatles/With+The+Beatles",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/dc93a04aab74427ab867aee61f00e6bb.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/dc93a04aab74427ab867aee61f00e6bb.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/dc93a04aab74427ab867aee61f00e6bb.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/dc93a04aab74427ab867aee61f00e6bb.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Love",
            "playcount": 13067760,
            "mbid": "2ecfd0c6-9da6-3d1b-b459-65e0a37a86a3",
            "url": "https://www.last.fm/music/The+Beatles/Love",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2fc299ac1c5d45ff95738172986288ef.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2fc299ac1c5d45ff95738172986288ef.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2fc299ac1c5d45ff95738172986288ef.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2fc299ac1c5d45ff95738172986288ef.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Beatles for Sale",
            "playcount": 9525860,
            "mbid": "02e51dac-b0be-3de7-8465-02d0bcd409c3",
            "url": "https://www.last.fm/music/The+Beatles/Beatles+for+Sale",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/24c1bc6fa6e54fdf86fd709caed380cb.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/24c1bc6fa6e54fdf86fd709caed380cb.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/24c1bc6fa6e54fdf86fd709caed380cb.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/24c1bc6fa6e54fdf86fd709caed380cb.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Yellow Submarine",
            "playcount": 5997091,
            "mbid": "d684b850-3ed1-3003-b64b-1a4ed1a1b029",
            "url": "https://www.last.fm/music/The+Beatles/Yellow+Submarine",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/fe61c64822bb4488adae3b6162aa595d.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/fe61c64822bb4488adae3b6162aa595d.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/fe61c64822bb4488adae3b6162aa595d.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/fe61c64822bb4488adae3b6162aa595d.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "The Beatles (The White Album)",
            "playcount": 4170895,
            "url": "https://www.last.fm/music/The+Beatles/The+Beatles+(The+White+Album)",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/59e40d830d1c4206b6d392a09d94f2b4.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/59e40d830d1c4206b6d392a09d94f2b4.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/59e40d830d1c4206b6d392a09d94f2b4.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/59e40d830d1c4206b6d392a09d94f2b4.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "The Beatles",
            "playcount": 9583307,
            "mbid": "e5ef6cd9-d078-4435-b005-2f4ee6d44d61",
            "url": "https://www.last.fm/music/The+Beatles/The+Beatles",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/0e17c97cccf44f7a85bb6c1c4029c0c9.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/0e17c97cccf44f7a85bb6c1c4029c0c9.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/0e17c97cccf44f7a85bb6c1c4029c0c9.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/0e17c97cccf44f7a85bb6c1c4029c0c9.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "The Beatles 1",
            "playcount": 6698507,
            "url": "https://www.last.fm/music/The+Beatles/The+Beatles+1",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/d74b6c40e6a5483c9eb0c5f046a9e02c.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/d74b6c40e6a5483c9eb0c5f046a9e02c.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/d74b6c40e6a5483c9eb0c5f046a9e02c.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/d74b6c40e6a5483c9eb0c5f046a9e02c.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Abbey Road (Remastered)",
            "playcount": 2221368,
            "url": "https://www.last.fm/music/The+Beatles/Abbey+Road+(Remastered)",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/e97046f5bc772a726c602cc2e01830c0.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/e97046f5bc772a726c602cc2e01830c0.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/e97046f5bc772a726c602cc2e01830c0.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/e97046f5bc772a726c602cc2e01830c0.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "1 (Remastered)",
            "playcount": 2043512,
            "url": "https://www.last.fm/music/The+Beatles/1+(Remastered)",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/207c9708aabfc084aee235ab2c8c4ee9.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/207c9708aabfc084aee235ab2c8c4ee9.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/207c9708aabfc084aee235ab2c8c4ee9.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/207c9708aabfc084aee235ab2c8c4ee9.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Help! (Remastered)",
            "playcount": 1121686,
            "url": "https://www.last.fm/music/The+Beatles/Help%21+(Remastered)",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/5c6a3dc2860a4a289960f0ac7d17642e.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/5c6a3dc2860a4a289960f0ac7d17642e.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/5c6a3dc2860a4a289960f0ac7d17642e.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/5c6a3dc2860a4a289960f0ac7d17642e.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Past Masters, Vol. 2",
            "playcount": 1683486,
            "url": "https://www.last.fm/music/The+Beatles/Past+Masters,+Vol.+2",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/c30280ff8c3346f7b3d7a4e694276e30.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/c30280ff8c3346f7b3d7a4e694276e30.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/c30280ff8c3346f7b3d7a4e694276e30.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/c30280ff8c3346f7b3d7a4e694276e30.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Let It Be... Naked",
            "playcount": 2376397,
            "mbid": "d370e57c-8c30-4828-8f83-5d98ea994145",
            "url": "https://www.last.fm/music/The+Beatles/Let+It+Be...+Naked",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/60865d473f4448018c1cd3884cbb0cb2.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/60865d473f4448018c1cd3884cbb0cb2.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/60865d473f4448018c1cd3884cbb0cb2.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/60865d473f4448018c1cd3884cbb0cb2.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "The Beatles (Remastered)",
            "playcount": 1512774,
            "url": "https://www.last.fm/music/The+Beatles/The+Beatles+(Remastered)",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/f600653c77a343d69ec5d0d3ab383ef4.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/f600653c77a343d69ec5d0d3ab383ef4.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/f600653c77a343d69ec5d0d3ab383ef4.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/f600653c77a343d69ec5d0d3ab383ef4.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Rubber Soul (Remastered)",
            "playcount": 1033611,
            "url": "https://www.last.fm/music/The+Beatles/Rubber+Soul+(Remastered)",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/96dd6217b88a48f6b411379fe1cb03f4.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/96dd6217b88a48f6b411379fe1cb03f4.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/96dd6217b88a48f6b411379fe1cb03f4.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/96dd6217b88a48f6b411379fe1cb03f4.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Let It Be (remastered)",
            "playcount": 788742,
            "url": "https://www.last.fm/music/The+Beatles/Let+It+Be+(remastered)",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/17d6c086431048976636af874363d00f.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/17d6c086431048976636af874363d00f.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/17d6c086431048976636af874363d00f.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/17d6c086431048976636af874363d00f.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Please Please Me (remastered)",
            "playcount": 833752,
            "url": "https://www.last.fm/music/The+Beatles/Please+Please+Me+(remastered)",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/389a31c50bee1e0821315f3c2293f531.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/389a31c50bee1e0821315f3c2293f531.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/389a31c50bee1e0821315f3c2293f531.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/389a31c50bee1e0821315f3c2293f531.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Revolver (Remastered)",
            "playcount": 1094533,
            "url": "https://www.last.fm/music/The+Beatles/Revolver+(Remastered)",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/1d909bf3a71494f5689e3d73001f8895.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/1d909bf3a71494f5689e3d73001f8895.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/1d909bf3a71494f5689e3d73001f8895.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/1d909bf3a71494f5689e3d73001f8895.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "One",
            "playcount": 2545810,
            "url": "https://www.last.fm/music/The+Beatles/One",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/a62ceaf7dbdd4c15a8a77bb5bc698398.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/a62ceaf7dbdd4c15a8a77bb5bc698398.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/a62ceaf7dbdd4c15a8a77bb5bc698398.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/a62ceaf7dbdd4c15a8a77bb5bc698398.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Magical Mystery Tour (Remastered)",
            "playcount": 1109432,
            "url": "https://www.last.fm/music/The+Beatles/Magical+Mystery+Tour+(Remastered)",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/b8dc9241eefe5b851e91582dc30edbe9.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/b8dc9241eefe5b851e91582dc30edbe9.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/b8dc9241eefe5b851e91582dc30edbe9.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/b8dc9241eefe5b851e91582dc30edbe9.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "White Album",
            "playcount": 3932065,
            "url": "https://www.last.fm/music/The+Beatles/White+Album",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/14e1e3d0b3a44c738d5ef6047be59e7e.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/14e1e3d0b3a44c738d5ef6047be59e7e.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/14e1e3d0b3a44c738d5ef6047be59e7e.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/14e1e3d0b3a44c738d5ef6047be59e7e.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Early Contemporary Album (disc 1)",
            "playcount": 214871,
            "url": "https://www.last.fm/music/The+Beatles/Early+Contemporary+Album+(disc+1)",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/a3cb4799871c43fc83b84232e0ac8bed.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/a3cb4799871c43fc83b84232e0ac8bed.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/a3cb4799871c43fc83b84232e0ac8bed.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/a3cb4799871c43fc83b84232e0ac8bed.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Sgt. Pepper's Lonely Hearts Club Band (Remastered)",
            "playcount": 1001154,
            "url": "https://www.last.fm/music/The+Beatles/Sgt.+Pepper%27s+Lonely+Hearts+Club+Band+(Remastered)",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/594b0288cbd24df7bf4e6fccb8cb71dc.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/594b0288cbd24df7bf4e6fccb8cb71dc.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/594b0288cbd24df7bf4e6fccb8cb71dc.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/594b0288cbd24df7bf4e6fccb8cb71dc.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "A Hard Day's Night (Remastered)",
            "playcount": 737457,
            "url": "https://www.last.fm/music/The+Beatles/A+Hard+Day%27s+Night+(Remastered)",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/cfb26cafbea34ce1b1e3ac46d140ff09.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/cfb26cafbea34ce1b1e3ac46d140ff09.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/cfb26cafbea34ce1b1e3ac46d140ff09.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/cfb26cafbea34ce1b1e3ac46d140ff09.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Anthology 2",
            "playcount": 2007497,
            "mbid": "4991df87-15a6-33e8-9718-c17c7282d8de",
            "url": "https://www.last.fm/music/The+Beatles/Anthology+2",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/91d9bcd684bb48a7af1cfea3df94648b.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/91d9bcd684bb48a7af1cfea3df94648b.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/91d9bcd684bb48a7af1cfea3df94648b.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/91d9bcd684bb48a7af1cfea3df94648b.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "The Beatles (White Album) [Disc 1]",
            "playcount": 2735543,
            "url": "https://www.last.fm/music/The+Beatles/The+Beatles+(White+Album)+%5BDisc+1%5D",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/c92f7c9481a04eb39cda64433ef59a49.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/c92f7c9481a04eb39cda64433ef59a49.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/c92f7c9481a04eb39cda64433ef59a49.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/c92f7c9481a04eb39cda64433ef59a49.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "The Alternate Abbey Road",
            "playcount": 220412,
            "mbid": "5ab72f9d-c1b4-4e4a-bb72-406d858837a9",
            "url": "https://www.last.fm/music/The+Beatles/The+Alternate+Abbey+Road",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/684417d23b505e34ec47b4d826a7e68b.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/684417d23b505e34ec47b4d826a7e68b.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/684417d23b505e34ec47b4d826a7e68b.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/684417d23b505e34ec47b4d826a7e68b.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "1962-1966",
            "playcount": 1619662,
            "mbid": "1903f00b-5131-48ee-9f77-ecf1835a34bb",
            "url": "https://www.last.fm/music/The+Beatles/1962-1966",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/9ea272a1f77b454081fc8804f7f87ac1.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/9ea272a1f77b454081fc8804f7f87ac1.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/9ea272a1f77b454081fc8804f7f87ac1.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/9ea272a1f77b454081fc8804f7f87ac1.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "The Beatles (White Album)",
            "playcount": 3204477,
            "url": "https://www.last.fm/music/The+Beatles/The+Beatles+(White+Album)",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/210f365a483c4e1085a701764a9dcce9.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/210f365a483c4e1085a701764a9dcce9.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/210f365a483c4e1085a701764a9dcce9.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/210f365a483c4e1085a701764a9dcce9.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Anthology 1",
            "playcount": 2032227,
            "mbid": "93920277-bb3f-4944-a33a-b4a48ee3f7e6",
            "url": "https://www.last.fm/music/The+Beatles/Anthology+1",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/4234ad6bea72481c8ba30e81fe583c35.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/4234ad6bea72481c8ba30e81fe583c35.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/4234ad6bea72481c8ba30e81fe583c35.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/4234ad6bea72481c8ba30e81fe583c35.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Past Masters, Volume One",
            "playcount": 1407785,
            "mbid": "9df42f72-ae56-4f5b-8f35-53aa3e8665b6",
            "url": "https://www.last.fm/music/The+Beatles/Past+Masters,+Volume+One",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/3efe4698bc4d40b6a6392af8fc94e584.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/3efe4698bc4d40b6a6392af8fc94e584.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/3efe4698bc4d40b6a6392af8fc94e584.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/3efe4698bc4d40b6a6392af8fc94e584.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Past Masters",
            "playcount": 2406238,
            "mbid": "b5885b2d-afae-47b1-945e-6e1869590974",
            "url": "https://www.last.fm/music/The+Beatles/Past+Masters",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/159727a1378e40c2b329c302ce9f66ea.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/159727a1378e40c2b329c302ce9f66ea.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/159727a1378e40c2b329c302ce9f66ea.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/159727a1378e40c2b329c302ce9f66ea.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Yellow Submarine (Remastered)",
            "playcount": 303632,
            "url": "https://www.last.fm/music/The+Beatles/Yellow+Submarine+(Remastered)",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/8a23c560c54546bb9ce8273ad72c15a7.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/8a23c560c54546bb9ce8273ad72c15a7.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/8a23c560c54546bb9ce8273ad72c15a7.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/8a23c560c54546bb9ce8273ad72c15a7.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Yesterday... and Today",
            "playcount": 133351,
            "url": "https://www.last.fm/music/The+Beatles/Yesterday...+and+Today",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/6a35d6bacc35424eba6fef1f711c162c.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/6a35d6bacc35424eba6fef1f711c162c.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/6a35d6bacc35424eba6fef1f711c162c.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/6a35d6bacc35424eba6fef1f711c162c.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "The Beatles (White Album) [Disc 2]",
            "playcount": 1329892,
            "url": "https://www.last.fm/music/The+Beatles/The+Beatles+(White+Album)+%5BDisc+2%5D",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/d1a3754648b4486b844aab2c14e72662.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/d1a3754648b4486b844aab2c14e72662.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/d1a3754648b4486b844aab2c14e72662.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/d1a3754648b4486b844aab2c14e72662.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Anthology 3",
            "playcount": 1558683,
            "mbid": "50893966-1a48-3500-8d35-d96d1109a39f",
            "url": "https://www.last.fm/music/The+Beatles/Anthology+3",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/c406e9a7841745109c5588192c1ab6f9.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/c406e9a7841745109c5588192c1ab6f9.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/c406e9a7841745109c5588192c1ab6f9.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/c406e9a7841745109c5588192c1ab6f9.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Past Masters, Vol. 1",
            "playcount": 1109324,
            "url": "https://www.last.fm/music/The+Beatles/Past+Masters,+Vol.+1",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/c22a736a569946608dfc2644aa85e2f7.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/c22a736a569946608dfc2644aa85e2f7.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/c22a736a569946608dfc2644aa85e2f7.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/c22a736a569946608dfc2644aa85e2f7.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "Hey Jude",
            "playcount": 726648,
            "mbid": "98392e46-ed13-38ce-af5f-0bc70db73587",
            "url": "https://www.last.fm/music/The+Beatles/Hey+Jude",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/b7dbb49432b6462ec67d143d3af8aca4.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/b7dbb49432b6462ec67d143d3af8aca4.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/b7dbb49432b6462ec67d143d3af8aca4.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/b7dbb49432b6462ec67d143d3af8aca4.png",
                "size": "extralarge"
            }
            ]
        },
        {
            "name": "With the Beatles (Remastered)",
            "playcount": 456295,
            "url": "https://www.last.fm/music/The+Beatles/With+the+Beatles+(Remastered)",
            "artist": {
            "name": "The Beatles",
            "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
            "url": "https://www.last.fm/music/The+Beatles"
            },
            "image": [
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/85e143144eec4ce8bb4ad597fa49cea0.png",
                "size": "small"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/85e143144eec4ce8bb4ad597fa49cea0.png",
                "size": "medium"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/85e143144eec4ce8bb4ad597fa49cea0.png",
                "size": "large"
            },
            {
                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/85e143144eec4ce8bb4ad597fa49cea0.png",
                "size": "extralarge"
            }
            ]
        }
    ];
          
      
}