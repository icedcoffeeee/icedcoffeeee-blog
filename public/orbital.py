from PIL import Image
from ipyvolume.examples import example_ylm as ylm
import numpy as np
from vispy import app, scene
from vispy.color import BaseColormap

SHAPE = 128
vol = ylm(m=0, n=2, shape=SHAPE, limits=[-4, 4], draw=False, show=False).astype("f4")

canvas = scene.SceneCanvas(keys="interactive", size=(800, 450), show=True)
view = canvas.central_widget.add_view()

volume = scene.visuals.Volume(vol, parent=view.scene, threshold=0.225)
# volume.transform = scene.STTransform(translate=(-SHAPE / 2, -SHAPE / 2, 0))

fov = 60.0
view.camera = scene.cameras.TurntableCamera(
    parent=view.scene, fov=fov, name="Turntable"
)


class RedBlue(BaseColormap):
    glsl_map = """
    vec4 translucent_fire(float t) {
        return (1 - t) * vec4(0., 0., 1., 0.) +
            t * vec4(1., 0., 0., 1.);
    }
    """


volume.cmap = RedBlue()

T = 10
fps = 120


def rotate_vol(_):
    global view
    view.camera.orbit(360 / fps / T, 0)
    canvas.update()


def save_gif():
    global N
    images = []

    for _ in np.arange(0, fps * T):
        images += [Image.fromarray(canvas.render())]
        rotate_vol(_)

    images[0].save(
        "./public/orbital.gif",
        save_all=True,
        append_images=images[1:],
        duration=1000 / fps,
        loop=0,
    )


def run():
    app.Timer(1 / fps, connect=rotate_vol, start=True)
    app.run()


save_gif()
# run()
