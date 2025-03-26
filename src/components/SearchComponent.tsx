'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = () => {
    if (!searchTerm.trim()) return
    
    setIsSearching(true)
    
    // Simulate search results based on the search term
    setTimeout(() => {
      const results = [
        `Technologies related to "${searchTerm}"`,
        `Certifications for "${searchTerm}" specialists`,
        `Tools used in "${searchTerm}" environments`,
        `Skills needed for "${searchTerm}" professionals`
      ]
      setSearchResults(results)
      setIsSearching(false)
    }, 500)
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search for skills, technologies, or certifications..."
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button onClick={handleSearch} disabled={isSearching}>
          <Search className="h-4 w-4 mr-2" />
          {isSearching ? 'Searching...' : 'Search'}
        </Button>
      </div>

      {searchResults.length > 0 && (
        <Card className="mt-4">
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-2">Search Results</h3>
            <ul className="space-y-2">
              {searchResults.map((result, index) => (
                <li key={index} className="p-2 hover:bg-muted rounded-md transition-colors">
                  <a href="#" className="block">{result}</a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
