
## mapM

# sequence 

...

# traverse 

...

# join

...

# join + traverse

...

# Transformers

...

# <$> + <*> 

...

return $ (,) <$> (maybeInterrupt mkey) <*> mval

# <$>  + mapM

Map.fromList <$> mapM initDb coll

# Fun with Either 

Either gone wild with `left`


### Where things are coming from?


import           Control.Applicative ((<$>), (<*>))
import           Data.Traversable (traverse)
