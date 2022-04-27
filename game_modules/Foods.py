"""Class file for food items"""


class Food:
    """Base class for all food items"""
    tier = 1
    pack = (True, True)

    @classmethod
    def to_dict(cls):
        return {"name": cls.__name__,
                "tier": cls.tier,
                "img_url": f"https://superauto.pet/assets/food-{cls.__name__.casefold()}.svg"}


class Apple(Food):
    """Class definition for Apple - Gives Targeted Pet +1 hp and +1 ap"""
    tier = 1
    pack = (True, True)
