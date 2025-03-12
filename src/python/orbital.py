# from https://github.com/widgetti/ipyvolume/blob/master/ipyvolume/examples.py
import numpy as np
import scipy as sc


def xyz(shape=32, limits=[-4, 4]):
    v = [
        slice(vmin, vmax + (vmax - vmin) / float(N) / 2, (vmax - vmin) / float(N - 1))
        for (vmin, vmax), N in zip([limits] * 3, [shape] * 3)
    ]
    x, y, z = np.ogrid.__getitem__(v)
    r = (x**2 + y**2 + z**2) ** 0.5
    theta = np.arctan2(y, x)
    phi = np.arccos(z / r)
    return r, theta, phi


def get_orbital(m: int, n: int):
    r, theta, phi = xyz()
    radial = np.exp(-((r - 2) ** 2))
    data = np.abs(sc.special.sph_harm(m, n, theta, phi) ** 2) * radial
    return data


if __name__ == "__main__":
    data = get_orbital(0, 2).reshape(-1)
    data -= np.min(data)
    data /= np.max(data)
    data *= 255

    with open("./orbital.json", "w") as f:
        f.write(str(data.astype("u8").tolist()))
